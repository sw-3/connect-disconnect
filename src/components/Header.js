import './App.css'

const Header = ({ walletAddress }) => {
  return (
    <div className="header-section">
      <h1 className="title">Account Abstraction: No Wallet Needed</h1>
      {walletAddress ? (
        <div>
          <p style={{fontSize:18 + 'px'}}>
            You are connected to the blockchain, and can use this app!
          </p>
          <p>
            <strong>If you come back to this page, your connection persists.</strong><br />
              Click the <strong><i>Disconnect</i></strong> button to fully disconnect.
          </p>
        </div>
      ) : (
        <div>
          <span style={{fontSize:24 + 'px'}}>
            Connect with an email address or Google account!
          </span>
          <br />
        </div>
      )}
    </div>
  )
}

export default Header
