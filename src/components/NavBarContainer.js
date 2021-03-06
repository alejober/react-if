import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import image5 from './../img/nav-ab.png';
import image6 from './../img/nav-mi.png';
import image7 from './../img/nav-tr.png';
import image8 from'./../img/nav-es.png';
import image9 from'./../img/nav-BT.png';
import imageif from './../img/if-isologo.png';

const NavBarContainer = () => {
  return (
<>
  <Navbar className='navbar-default fixed-top'>
    <Container>
      <Navbar.Brand href="#home"><img width='250px' src={imageif} alt="Ingenieria Financiera"/></Navbar.Brand>
      <Nav className="espacio">
        <Nav.Link href="http://cuantif.com" target='_blank'><img className='botonAB' width='37px' src={image5} alt="nav-albot"/></Nav.Link>
        <Nav.Link href="#estrategia"><img className='botonAB' width='37px' src={image7} alt="nav-mineria"/></Nav.Link>
        <Nav.Link href="https://bonosdeltesoroestadosunidos.com/" target='_blank'><img className='botonAB' width='37px' src={image9} alt="nav-albot"/></Nav.Link>
        <Nav.Link href="#trading"><img className='botonAB' width='37px' src={image8} alt="nav-mineria"/></Nav.Link>
        <Nav.Link href="#mineria"><img className='botonAB' width='37px' src={image6} alt="nav-mineria"/></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
</>);
};

export default NavBarContainer;