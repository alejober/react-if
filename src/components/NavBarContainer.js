import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import image5 from './../img/nav-ab.png';
import image6 from './../img/nav-mi.png';
import image7 from './../img/nav-tr.png';
import image8 from'./../img/nav-es.png';
import imageif from './../img/if-isologo.png';

const NavBarContainer = () => {
  return (
<>
  <Navbar className='navbar-default fixed-top' bg='transparent'>
    <Container>
      <Navbar.Brand href="#home"><img width='200px' src={imageif} alt="Ingenieria Financiera"/></Navbar.Brand>
      <Nav className="espacio">
        <Nav.Link href="#albot"><img width='30px' src={image5} alt="nav-albot"/></Nav.Link>
        <Nav.Link href="#mineria"><img width='30px' src={image6} alt="nav-mineria"/></Nav.Link>
        <Nav.Link href="#estrategia"><img width='30px' src={image7} alt="nav-mineria"/></Nav.Link>
        <Nav.Link href="#trading"><img width='30px' src={image8} alt="nav-mineria"/></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
</>);
};

export default NavBarContainer;