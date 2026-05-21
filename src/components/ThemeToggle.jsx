'use client';

import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'system';
    setTheme(saved);
    applyTheme(saved);
  }, []);

  const applyTheme = (t) => {
    const root = document.documentElement;
    if (t === 'dark') {
      root.classList.add('dark');
    } else if (t === 'light') {
      root.classList.remove('dark');
    } else {
      // system
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      prefersDark ? root.classList.add('dark') : root.classList.remove('dark');
    }
  };

  const handleTheme = (t) => {
    setTheme(t);
    localStorage.setItem('theme', t);
    applyTheme(t);
  };

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
        .theme-btn {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          transition: all 0.15s;
          color: #6b7280;
        }
        .theme-btn:hover {
          background: #e5e7eb;
          color: #111827;
        }
        .theme-btn.active {
          background: #ffffff;
          color: #111827;
          box-shadow: 0 1px 4px rgba(0,0,0,0.10);
        }
        :global(.dark) .theme-toggle {
          background: #1f2937;
          border-color: #374151;
        }
        :global(.dark) .theme-btn:hover {
          background: #374151;
          color: #f9fafb;
        }
        :global(.dark) .theme-btn.active {
          background: #374151;
          color: #f9fafb;
          box-shadow: 0 1px 4px rgba(0,0,0,0.3);
        }
      `}</style>

      <div className="theme-toggle">
        <button
          className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
          onClick={() => handleTheme('light')}
          title="Light mode"
        >
          ☀️
        </button>
        <button
          className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
          onClick={() => handleTheme('dark')}
          title="Dark mode"
        >
          🌙
        </button>
        <button
          className={`theme-btn ${theme === 'system' ? 'active' : ''}`}
          onClick={() => handleTheme('system')}
          title="System mode"
        >
          🖥️
        </button>
      </div>
    </>
  );
};

export default ThemeToggle;