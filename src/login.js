import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { injectedConnector } from "./connectors";

function Login() {
  const [account, setAccount] = useState("");
  const [blockNumber, setBlockNumber] = useState("");
  const { active, activate, connector, library, error } = useWeb3React();

  useEffect(() => {
    if (active) {
      connector.getAccount().then(setAccount);
      library.getBlockNumber().then(setBlockNumber);
      const signer = library.getSigner();
      // signer.signMessage("Hello World").then(msg => {
      //   console.log(msg)
      // })
    }
  });

  return (
    <div>
      <div>Connected account: {account}</div>
      <div>Block number: {blockNumber}</div>
      {!active ? (
        <button
          onClick={() => {
            activate(injectedConnector);
          }}
        >
          Login
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Login;
