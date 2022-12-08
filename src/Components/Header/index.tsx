import { Nav, Navbar, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/vialogo.jpg";

const Header: React.FC = () => {
  return (
    <div className="">
      <Navbar bg="white" collapseOnSelect expand="lg" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                height="50"
                className="d-inline-block align-top"
                alt="VIA cleaning logo"
                src={logo}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <Link to="/">
                <Button variant="light w-100">На головну</Button>
              </Link>

              <Link to="/about">
                <Button variant="light w-100">О нас</Button>
              </Link>

              <Link to="/service">
                <Button variant="light w-100">Послуги</Button>
              </Link>

              <Link to="/contacts">
                <Button variant="light w-100">Контакти</Button>
              </Link>
            </Nav>
            <Nav className="justify-content-end">
              <Link to="/forma">
                <Button variant="success w-100">Замовити послугу</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
