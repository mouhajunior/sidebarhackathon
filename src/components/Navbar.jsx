import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/Logo.png'
import flech2 from '../images/flech2.png'
import flech1 from '../images/flech1.png'
import cloche from '../images/cloche.png'
import notif from '../images/notif.png'
import '../App.css'; // Assurez-vous d'ajuster le chemin vers votre fichier CSS

function CollapsibleExample() {
  return (
    <div className="navbar-fixed">
      <Navbar collapseOnSelect expand="lg" className="bg-body-white" style={{boxShadow:'0 1px 5px'}}>
        <Container>
          <Navbar.Brand href="#home"><img src={Logo} alt=''/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" style={{color:'black', fontSize:'25px', marginLeft:'60px'}}>Annee Scolaire : 2021 - 2022</Nav.Link>
              <Nav.Link href="#pricing" style={{marginLeft:'60px', marginTop:'1%'}}><img className='fleche2' src={flech2} alt=''/></Nav.Link>
              <Nav.Link href="#pricing" style={{marginTop:'1%'}}><img className='fleche1' src={flech1} alt=''/></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets"><input className='recherche_navbar' placeholder='Rechercher' style={{width:'250px', height:'30px', borderRadius:'5px'}}></input></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <img className='cloche1' style={{position:'absolute', }} src={notif} alt=''/>
                <img className='cloche' src={cloche} alt=''/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CollapsibleExample;
