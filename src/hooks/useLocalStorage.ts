import { useCallback, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  const prefixedKey = `matchmind-${key}`;

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(prefixedKey);
      if (item === null) return initialValue;
      return JSON.parse(item) as T;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const nextValue = value instanceof Function ? value(prev) : value;
        try {
          localStorage.setItem(prefixedKey, JSON.stringify(nextValue));
        } catch {
          // Quota exceeded or localStorage unavailable
        }
        return nextValue;
      });
    },
    [prefixedKey]
  );

  return [storedValue, setValue];
}
