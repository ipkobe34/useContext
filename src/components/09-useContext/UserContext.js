import { createContext, useContext, useState, useMemo } from "react";

export const UserContext = createContext();

const defaultState = [
  {
  id: 1,
  name: 'Jorge'
  },
  {
  id: 2,
  name: 'Jesse'
  }

];

export const UserProvider = ({ children }) => {
  const [personas, setPersonas] = useState(defaultState);

  // const value = useMemo(() => {
  //   console.log('UserProvider', personas)
  //   return {
  //     personas, setPersonas
  //   }
  // }, [personas, setPersonas]) ;

  const value = {
      personas, setPersonas
    }
    console.log('UserProvider', personas)
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw Error("useUser required a to be wrapped by UserProvider.")
  }
  return context;
}