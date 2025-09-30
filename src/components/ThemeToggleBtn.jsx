import React, { useEffect } from 'react';
import { useTheme } from '../Context/ThemeContext';
import assets from '../assets/assets';

const ThemeToggleBtn = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <div className="">
      {theme === 'dark' ? (
        <img
          src={assets.sun_icon}
          className="border border-gray-600 rounded-full size-9 p-1.5 cursor-pointer"
          onClick={() => setTheme('light')}
        ></img>
      ) : (
        <img
          src={assets.moon_icon}
          className="border border-gray-600 rounded-full size-9 p-1.5 cursor-pointer"
          onClick={() => setTheme('dark')}
        ></img>
      )}
    </div>
  );
};

export default ThemeToggleBtn;
