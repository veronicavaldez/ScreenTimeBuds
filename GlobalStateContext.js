// GlobalStateContext.js
import { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    // Your initial global state goes here
    number: 2,
    slide: 0
  });

  const updateGlobalState = (newState) => {
    setGlobalState((prevGlobalState) => ({
      ...prevGlobalState,
      ...newState,
    }));
  };

  return (
    <GlobalStateContext.Provider value={{ globalState, updateGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
