import React from 'react';
import ReactDOM from 'react-dom';
// import { AppUsuario } from './components/09-useContext/AppUsuario';
import { MainApp , WithProviders} from './components/09-useContext/MainApp';
// import { UserContext } from './components/09-useContext/UserContext';
// import { CallbackHook } from './components/06-memos/CallbackHook';
// import { TodoApp } from './components/08-useReducer/TodoApp';

ReactDOM.render(
  <WithProviders>
    <MainApp />
  </WithProviders>,
  document.getElementById('root')
);


