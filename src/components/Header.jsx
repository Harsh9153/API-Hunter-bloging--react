import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

function Header()
{
    return(
        <>
        
       
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{display:"flex",alignItems:"center"}}>
           <NavLink to={"/"} style={{marginRight:"20px",color:"black", fontSize:"18px",fontWeight:"600"}} >Home</NavLink>
            <NavLink to={"/form"} style={{marginRight:"20px",color:"black", fontSize:"18px",fontWeight:"600"}} >Form</NavLink>
            <NavLink to={"/categoryform"} style={{marginRight:"20px",color:"black", fontSize:"18px",fontWeight:"600"}} >Category Form</NavLink>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </>
    )
}
export default Header