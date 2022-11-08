import "../styles/globals.css";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { AppContext } from "../Context/AppContext";

function MyApp({ Component, pageProps }) {
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
    <AppContext.Provider value={contextValue}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
