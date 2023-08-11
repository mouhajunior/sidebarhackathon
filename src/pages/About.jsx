
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/esm/Row';
import { Link } from 'react-router-dom';
import Vector from '../images/Vector.png'
import Vectorn2 from '../images/Vectorn2.png'
import Vectorn3 from '../images/Vectorn3.png'
import '../App.css'

function About() {
  return (
   <div>
    <div className='' style={{marginBottom:'5%'}}>
    <h4 style={{marginTop:'5%'}}>Gestion Personnel</h4>
    <hr style={{marginTop:'1%', marginBottom:'10%'}}></hr>
    <div className='container' style={{display:'grid', gap:'20px'}}>
        <Row>
            <div className='col-6-md'>
                <Card style={{border:'none', background:'none', marginTop:'5%'}}>
<h5>Nos associé</h5>
                </Card>
            </div>
            <div className='col-6-md' >
                <Card style={{float:'right', border:'none', background:'none'}}>
                   <input className='recherche_associer' style={{width:'300px', height:'40px', border:'none', boxShadow:'0 1px 6px', borderRadius:'10px', marginBottom:'5%'}} placeholder='  Rechercher un associees'></input>
                </Card>
            </div>
        </Row>

    </div>
    </div>
     <CardGroup style={{}}>
      <Card className='nprof' style={{border:'none', boxShadow:'0 1px 6px', marginRight:'5%', height:'130px', borderRadius:'20px'}}>
        <Card.Body>
          <Card.Text>
          <img style={{width:'35px', marginTop:'3%', marginLeft:'5%'}} src={Vector} alt=''/>
          <p style={{fontSize:'35px',position:'absolute',left:'82%', top:'10%', fontWeight:'bold', color:'rgb(54, 181, 0)'}}>25</p>
          <p></p>
  <Link to="/professeur" style={{color: 'black', textDecoration: 'none',textAlign:'center', marginLeft:'20%', fontSize:'20px'}}>Nombre professeur</Link>

          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card style={{border:'none', boxShadow:'0 1px 6px', marginRight:'5%', height:'130px', borderRadius:'20px'}}>
        <Card.Body>
          <Card.Text>
          <img style={{width:'35px', marginTop:'3%', marginLeft:'5%'}} src={Vectorn2} alt=''/>
          <p style={{fontSize:'35px',position:'absolute',left:'82%', top:'10%', fontWeight:'bold', color:'rgb(54, 181, 0)'}}>25</p>
          <p></p>
 <Link to="/Nombreassocies" style={{color: 'black', textDecoration: 'none', marginTop:'5%',textAlign:'center', marginLeft:'20%', fontSize:'20px'}}>Nombre Associeés</Link>

          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card style={{border:'none', boxShadow:'0 1px 6px', height:'130px', borderRadius:'20px', marginRight:'5%'}}>
        <Card.Body>
          <Card.Text>
          <img style={{width:'35px', marginTop:'3%', marginLeft:'5%'}} src={Vectorn3} alt=''/>
          <p style={{fontSize:'35px',position:'absolute',left:'82%', top:'10%', fontWeight:'bold', color:'rgb(54, 181, 0)'}}>15</p>
          <p></p>
   <Link to="/Nombreemplyer" style={{color: 'black', textDecoration: 'none' ,textAlign:'center', marginLeft:'20%', fontSize:'20px'}}>Nombre d'employes</Link>

          </Card.Text>
        </Card.Body>
        
      </Card>


    </CardGroup>
    
   </div>
  );
}

export default About;








