import { Nav } from "react-bootstrap"
import './App.css'

const Header = () => {
  return (
    <footer className="footer-section">
      {`created by SW3 Consulting, powered by `}
      <a href="https://thirdweb.com/account-abstraction" target="_blank">
        {`thirdweb`}
      </a>
      <Nav className="justify-content-center">
        <Nav.Link href="https://github.com/sw-3" target="_blank">GitHub</Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/scottweberg/" target="_blank">LinkedIn</Nav.Link>
      </Nav>
    </footer>
  )
}

export default Header
