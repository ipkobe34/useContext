import React from 'react';
import { useUser } from './UserContext';

import './styles.css';

export const ListaUsuario = ({children}) => {
  const {personas} = useUser();
  console.log('ListaUsuario', personas)

  return (
    <div>
      <h1>App Usuario</h1>
      {children}
    </div>
  )
}
