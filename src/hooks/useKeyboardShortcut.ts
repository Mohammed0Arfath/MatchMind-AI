import { useCallback, useEffect } from 'react';

interface KeyboardShortcut {
  key: string;
  ctrlKey?: boolean;
  metaKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
}

export function useKeyboardShortcut(
  shortcut: KeyboardShortcut,
  callback: () => void,
  enabled: boolean = true
): void {
  const handler = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled) return;

      const target = event.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      }

      const matchesKey = event.key.toLowerCase() === shortcut.key.toLowerCase();
      const matchesCtrl = shortcut.ctrlKey ? event.ctrlKey || event.metaKey : true;
      const matchesShift = shortcut.shiftKey ? event.shiftKey : true;
      const matchesAlt = shortcut.altKey ? event.altKey : true;

      if (matchesKey && matchesCtrl && matchesShift && matchesAlt) {
        event.preventDefault();
        callback();
      }
    },
    [shortcut, callback, enabled]
  );

  useEffect(() => {
    if (!enabled) return;
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [handler, enabled]);
}
