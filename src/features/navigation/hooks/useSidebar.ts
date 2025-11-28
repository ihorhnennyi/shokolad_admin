import { useCallback, useEffect, useState } from 'react';

const SIDEBAR_STORAGE_KEY = 'sidebar_collapsed';

export const useSidebar = () => {
  const [collapsed, setCollapsed] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const saved = window.localStorage.getItem(SIDEBAR_STORAGE_KEY);
    if (saved === null) return false;
    return saved === 'true';
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(SIDEBAR_STORAGE_KEY, String(collapsed));
  }, [collapsed]);

  const toggleCollapsed = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return {
    collapsed,
    toggleCollapsed,
  };
};
