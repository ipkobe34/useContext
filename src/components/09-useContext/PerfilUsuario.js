import React, {useCallback} from 'react';
import { useTheme } from './ThemeContext';

import './styles.css';

export const PerfilUsuario = () => {
  const {theme, setTheme} = useTheme();
  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }, [theme, setTheme])
  console.log('PerfilUsuario',theme)
  return (
    <div>
      <h1>{theme}</h1>
      <button onClick={toggleTheme}>toggle theme</button>
    </div>
  )
}
