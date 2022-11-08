import { createContext, useContext } from "react";

export const AppContext = createContext();

export const useContext = () => {
  return useContext(AppContext);
};
