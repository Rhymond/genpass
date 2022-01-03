import { Box, Container, LinearProgress } from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import Login from "./pages/login";
import Layout from "./pages/layout";
import { injected } from "./connectors";
import { useWeb3React } from "@web3-react/core";

function App() {
  const [account, setAccount] = useState("");
  const [secret, setSecret] = useState("");
  const [loaded, setLoaded] = useState(false);
  const { active, connector, library, activate, error } = useWeb3React();

  useEffect(() => {
    injected
      .isAuthorized()
      .then((isAuthorized) => {
        setLoaded(true);
        if (isAuthorized && !active && !error) {
          activate(injected);
        }
      })
      .catch(() => {
        setLoaded(true);
      });
    if (active) {
      connector.getAccount().then(setAccount);
    }
  }, [active, connector, library, error]);

  const handleLogin = () => {
    activate(injected);
  };

  return (
    <Container
      component="main"
      maxWidth="sm"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!loaded ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : active ? (
        <Layout account={account} secret={secret} />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </Container>
  );
}

export default App;
