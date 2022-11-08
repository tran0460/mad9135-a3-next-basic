import "../styles/globals.css";
import Layout from "../components/Layout";
import { useState } from "react";
import { AppContext } from "../Context/AppContext";

function MyApp({ Component, pageProps }) {
  const [teamList, setTeamList] = useState([]);
  const contextValue = [teamList, setTeamList];
  return (
    <AppContext.Provider value={contextValue}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
