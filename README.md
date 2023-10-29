# Connect-Disconnect

This project is a demo of thirdweb's account abstraction toolkit in a React application.

Any user can log into this blockchain app with just their email address. (No wallet or crypto needed!)

This example app does not make any actual on-chain transactions, but it is set up to be "gasless". Meaning that a connected user would not need to pay for any transaction fees; those would be covered by the owner of the application (via their thirdweb account).

## Install and Run Locally
After cloning this repo, you can run ```npm install``` in your terminal to install the packages.

You will need an account with thirdweb.com (it's free to start).

Using thirdweb's dashboard, create an API Key (which will have a Client ID) and deploy an Account Factory contract for Smart Wallets and Embedded Wallets. When choosing a blockchain, use the Mumbai test network.

Create a .env file using the .env-example, and fill in your thirdweb Client ID and Account Factory address.

Run ```npm run start``` in your terminal to launch the React app.

## User Interface
This simple app consists of a header with a Connect button, and some displayed information. The connect button uses thirdweb's modal to connect to the Mumbai testnet. The user can use their email address, or their Google account, or connect as a Guest by setting their own guest password. No wallet is needed!

Once connected, the app will indicate that you are connected to the blockchain, and the button will now say "Disconnect" (which does the obvious).

## Code Overview
- **index.js** - The setup to connect thirdweb's services to the React app happens here.  The App component is wrapped by the thirdweb Provider.
- **App.js** - Handles the logic to store a connected wallet to the React state.  It passes that wallet state into the other components, so they know what to display based on whether a user has connected yet.
- **Navigation.js** - This component displays the navigation bar and Connect/Disconnect button. Note how the "disconnect" function is acquired via a thirdweb React hook.
- **Header.js** - A component that simply displays different information based on whether the user has connected or not.

That's it! I hope this example is helpful in jump-starting someone's use of Account Abstraction concepts.

sw
