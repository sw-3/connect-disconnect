import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { 
  ConnectWallet,
  useDisconnect
} from "@thirdweb-dev/react"
import './App.css'

import logoImage from "../SW3-Logo-header-120.png"

const Navigation = ({ walletAddress }) => {
  const disconnect = useDisconnect();

  return (
    <Navbar className='navigation-section' expand='lg'>
      <img
        alt="logo"
        src={logoImage}
        width="120"
        height="96"
        className="d-inline-block align-top mx-3"
      />
      <Navbar.Brand className="navbar-title">Connect - Disconnect</Navbar.Brand>

      <Navbar.Toggle aria-controls="nav" />
      <Navbar.Collapse id="nav" className="justify-content-end">
        {walletAddress ? (
          <Button
            variant="dark"
            style={{ width: "150px", height: "50px", marginTop: "20px", color: "white" }}
            onClick={disconnect}
          >
            Disconnect...
          </Button>
        ) : (
          <ConnectWallet
            theme={"light"}
            btnTitle={"Connect"}
            modalSize={"compact"}
            welcomeScreen={{}}
            modalTitleIconUrl={logoImage}
          />
        )}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
