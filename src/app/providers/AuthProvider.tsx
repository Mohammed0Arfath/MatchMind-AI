import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signOut, User as FirebaseUser } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import type { User, UserRole } from '../../types';
import { ROLE_CONFIGS } from '../../types';

interface AuthContextType {
  user: User | null;
  role: UserRole | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  logout: () => Promise<void>;
  roleConfig: typeof ROLE_CONFIGS[UserRole] | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        try {
          // Fetch extended user profile from Firestore
          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUser({
              id: firebaseUser.uid,
              name: userData.name || firebaseUser.email || 'Unknown User',
              role: userData.role as UserRole || 'spectator',
              currentLocation: userData.currentLocation,
              currentStadiumId: userData.currentStadiumId,
              preferences: userData.preferences || {
                theme: 'dark',
                reducedMotion: false,
                highContrast: false,
                fontSize: 'normal',
                accessibilityNeeds: ['none'],
              },
              zone: userData.zone || null,
              shift: userData.shift || null,
            });
          } else {
            console.warn("User document not found in Firestore. Defaulting to spectator.");
            // Default fallback if no doc is found
            setUser({
              id: firebaseUser.uid,
              name: firebaseUser.email || 'Unknown',
              role: 'spectator',
              currentLocation: null,
              currentStadiumId: null,
              preferences: { theme: 'dark', reducedMotion: false, highContrast: false, fontSize: 'normal', accessibilityNeeds: ['none'] },
              zone: null,
              shift: null
            });
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const role = user?.role ?? null;
  const roleConfig = role ? ROLE_CONFIGS[role] : null;

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isAuthenticated: user !== null,
        isLoading,
        logout,
        roleConfig,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
