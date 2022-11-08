import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [teamList, setTeamList] = useState([]);
  const contextValue = { teamList, setTeamList };
  const handleFetch = async () => {
    const resp = await fetch("./api/TeamData");
    const data = await resp.json();
    setTeamList(data);
  };

  useEffect(() => {
    handleFetch();
  }, []);
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};
