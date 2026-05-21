'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // hydration mismatch এড়াতে
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <style>{`
        .theme-toggle {
          display: flex;
          align-items: center;
          background: #f3f4f6;
          border-radius: 12px;
          padding: 4px;
          gap: 2px;
          border: 1px solid #e5e7eb;
        }
        .dark .theme-toggle {
          background: #1f2937;
          border-color: #374151;
        }
        .theme-btn {
          width: 32px; height: 32px;
          border-radius: 8px; border: none;
          background: transparent; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; transition: all 0.15s;
        }
        .theme-btn:hover { background: #e5e7eb; }
        .dark .theme-btn:hover { background: #374151; }
        .theme-btn.active {
          background: #ffffff;
          box-shadow: 0 1px 4px rgba(0,0,0,0.10);
        }
        .dark .theme-btn.active {
          background: #374151;
          box-shadow: 0 1px 4px rgba(0,0,0,0.3);
        }
      `}</style>

      <div className="theme-toggle">
        <button
          className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
          onClick={() => setTheme('light')}
          title="Light mode"
        >☀️</button>
        <button
          className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
          onClick={() => setTheme('dark')}
          title="Dark mode"
        >🌙</button>
        <button
          className={`theme-btn ${theme === 'system' ? 'active' : ''}`}
          onClick={() => setTheme('system')}
          title="System mode"
        >🖥️</button>
      </div>
    </>
  );
};

export default ThemeToggle;