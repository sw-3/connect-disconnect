import Navbar from 'react-bootstrap/Navbar';
import { ConnectWallet } from "@thirdweb-dev/react"
import './App.css'

import logoImage from "../images/icon_640.jpg"

const Navigation = () => {
  return (
    <Navbar className='navigation-section' expand='lg'>
      <img
        alt="logo"
        src={logoImage}
        width="50"
        height="50"
        className="d-inline-block align-top mx-3"
      />
      <Navbar.Brand className="navbar-title">Best Pet Poll</Navbar.Brand>

      <Navbar.Toggle aria-controls="nav" />
      <Navbar.Collapse id="nav" className="justify-content-end">
        <ConnectWallet
          theme={"light"}
          btnTitle={"Connect"}
          modalSize={"compact"}
          welcomeScreen={{}}
          modalTitleIconUrl={""}
        />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
