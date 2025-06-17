import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo/logo.png";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import "./wallet-button.css";
import { useState } from "react";

function NavBar() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const generateRandomAddress = () => {
    const chars = "0123456789abcdef";
    let address = "0x";
    for (let i = 0; i < 40; i++) {
      address += chars[Math.floor(Math.random() * chars.length)];
    }
    return address;
  };

  const formatAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const handleConnect = () => {
    if (!isConnected) {
      const address = generateRandomAddress();
      setWalletAddress(address);
      setIsConnected(true);
    }
  };

  const handleDisconnect = (e) => {
    e.stopPropagation();
    setIsConnected(false);
    setWalletAddress("");
  };

  return (
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#" className="me-lg-5">
          <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1">Marketplace</Nav.Link>
            <Nav.Link href="#action2" className="px-lg-3">
              About Us
            </Nav.Link>
            <Nav.Link href="#action3">Developers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center order">
          <span className="line d-lg-inline-block d-none"></span>
          <i className="fa-regular fa-heart"></i>
          <div className="wallet-container">
            <Button
              variant={isConnected ? "secondary" : "primary"}
              className={`wallet-button ${
                isConnected ? "wallet-connected" : ""
              } d-none d-lg-inline-block`}
              onClick={handleConnect}
            >
              {isConnected ? (
                <span className="address-text">
                  {formatAddress(walletAddress)}
                </span>
              ) : (
                "Connect Wallet"
              )}
            </Button>
            {isConnected && (
              <Button
                variant="danger"
                size="sm"
                className="disconnect-button"
                onClick={handleDisconnect}
              >
                Disconnect
              </Button>
            )}
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
