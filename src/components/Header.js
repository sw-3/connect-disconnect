import './App.css'

const Header = ({ walletAddress }) => {
  return (
    <div className="header-section">
      <h1 className="title">Vote for the Best Pet</h1>
      {walletAddress ? (
        <div>
          <p style={{fontSize:18 + 'px'}}>
            Click a button below to vote for which animal makes the best pet!
          </p>
          <p>
            (<strong>NOTE: </strong>Everyone gets 1 vote! 
              If you vote again it will cancel your previous vote.)
          </p>
        </div>
      ) : (
        <div>
          <span style={{fontSize:24 + 'px'}}>
            To see the vote tally and cast a vote:
          </span>
          <br />
          <span>
            Connect to the poll with your email or Google account!
          </span>
        </div>
      )}
    </div>
  )
}

export default Header
