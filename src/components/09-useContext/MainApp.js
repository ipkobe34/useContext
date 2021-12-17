import React from 'react';
import { ListaUsuario } from './ListaUsuario';
import { PerfilUsuario } from './PerfilUsuario';
import { ThemeProvider } from './ThemeContext';
import { UserProvider } from './UserContext';

export const MainApp = () => {
  return (
    <>
      <ListaUsuario>

        <PerfilUsuario />
      </ListaUsuario>
    </> 
  )
}

export const WithProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <UserProvider>
        {children}
      </UserProvider>
    </ThemeProvider>
  )
}