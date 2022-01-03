import { ethers } from "ethers";
import { Web3ReactProvider } from "@web3-react/core";
import Layout from "./pages/layout";
import { Container, CssBaseline } from "@mui/material";
import * as React from "react";

function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Layout />
      </Container>
    </Web3ReactProvider>
  );
}

export default App;
