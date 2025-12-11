import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const isDark = localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(isDark);
    updateTheme(isDark);
  }, []);

  const updateTheme = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    updateTheme(newDarkMode);
    
    // Dispatch custom event for other components to listen to
    document.dispatchEvent(new CustomEvent('themeChange', { detail: { darkMode: newDarkMode } }));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background transition-colors duration-200"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <FiSun className="w-5 h-5 text-amber-400" />
      ) : (
        <FiMoon className="w-5 h-5 text-foreground/70" />
      )}
    </button>
  );
}
