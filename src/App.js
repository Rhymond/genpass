import { ethers } from 'ethers';
import { Web3ReactProvider } from '@web3-react/core'
import Password from "./pages/password";

function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Password />
    </Web3ReactProvider>
  );
}

export default App;
