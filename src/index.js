import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {
  ThirdwebProvider,
  smartWallet,
  localWallet,
  embeddedWallet,
} from "@thirdweb-dev/react";

const myFactoryAddress = process.env.REACT_APP_ACCOUNT_FACTORY

const smartWalletOptions = {
  factoryAddress: myFactoryAddress,
  gasless: true,
};

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={process.env.REACT_APP_CLIENT_ID}
      supportedWallets={[
        smartWallet(
          localWallet(),
          smartWalletOptions,
        ),
        smartWallet(
          embeddedWallet(),
          smartWalletOptions,
        ),
      ]}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
