import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/esm/Row';
import {
  FaPlus,
  }from "react-icons/fa";

function Nombreassocies() {
  return (
   <div>
    <div className='' style={{marginBottom:'5%'}}>
    <h4 style={{marginTop:'5%'}}>Gestion Personnel</h4>
    <button className='button_associes' style={{justifyContent:'center',fontSize:'35px', width:'90px', height:'90px', background:'rgb(98, 224, 20)', border:'none', borderRadius:'120px', color:'white', boxShadow:'0 1px 6px', marginTop:'7%', marginLeft:'50%'}}>
<FaPlus/>
    </button>
    <hr style={{marginTop:'1%'}}></hr>
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
      <Card style={{background:'black', color:'rgb(24, 181, 0)', textAlign:'center', borderRadius:'15px', marginRight:'10%'}}>
        <Card.Body>
          <Card.Text>
            Logo
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card style={{borderRadius:'15px',  textAlign:'center', border:'1px solid black', marginRight:'10%'}}>
        <Card.Body>
          <Card.Text>
            Logo
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card style={{background:'black', color:'rgb(24, 181, 0)', textAlign:'center', borderRadius:'15px', marginRight:'10%'}}>
        <Card.Body>
          <Card.Text>
            Logo
          </Card.Text>
        </Card.Body>
        
      </Card>

      <Card  style={{borderRadius:'15px', textAlign:'center', border:'1px solid black', marginRight:'10%'}}>
        <Card.Body>
          <Card.Text>
            Logo
          </Card.Text>
        </Card.Body>
      </Card>

    </CardGroup>
    <CardGroup>
      <Card style={{border:'none', marginRight:'2%'}}>
        <Card.Body>
          <Card.Text>
            Nom de l'entreprise associees
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card  style={{border:'none' ,marginRight:'10%'}}>
        <Card.Body>
          <Card.Text>
          Nom de l'entreprise associees
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card  style={{border:'none',  marginRight:'5%'}}>
        <Card.Body>
          <Card.Text>
          Nom de l'entreprise associees
          </Card.Text>
        </Card.Body>
        
      </Card>

      <Card  style={{border:'none', marginRight:'5%'}}>
        <Card.Body>
          <Card.Text>
          Nom de l'entreprise associees
          </Card.Text>
        </Card.Body>
      </Card>

    </CardGroup>
   </div>
  );
}

export default Nombreassocies;








