import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import iconerevenu from '../images/iconerevenu.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';

const data = [
  { id: 'Inscription', name: 'Scolarite', age: '07/10/20', city: '40.000 FCFA' },
  {  id: 'Mensualite', name: 'Scolaire', age: '07/10/20', city: '25.000 FCFA' },
  {  id: 'Inscription', name: 'Cantine', age: '07/10/20', city: '15.000 FCFA'},
  {  id: 'Mensualite', name: 'Transport', age: '07/10/20', city: '15.000 FCFA' },
  {  id: 'Inscription', name: 'C.particulier', age: '23/10/20', city: '15.000 FCFA'},
  {  id: 'Mensualite', name: 'C.particulier', age: '23/10/20',city: '15.000 FCFA' },

];


function Comment() {
  return (
    
        
    <Row xs={1} md={2} className="g-3">
    
            
          <Card style={{border:'none',boxShadow:'0 1px 5px'}}>
            <Card.Body>
            <Card.Title style={{marginTop:'1%', border:'none', fontWeight:'bold'}}>Accueil</Card.Title>

               <h6 style={{float:'right',marginBottom:'5%'}}>Revenu mensuel<br></br><span style={{marginTop:'6px'}}>440.000 <b>FCFA</b></span><br></br><br></br><span style={{marginTop:'5%'}}>375.000 <b>FCFA</b></span>
               <br></br><span>Inscription</span><br></br><br></br><span>375.000 <b>FCFA</b></span><br></br><span>Mensualite</span>
               </h6>
              <Card.Text style={{background:'black', width:'50%', height:'140px', marginTop:'5%',padding:'10px',borderRadius:'10px'}}>
                <img style={{float:'right', marginTop:'2%', marginRight:'3%'}} src={iconerevenu} alt=''/>
                <p style={{marginBottom:'10%'}}></p>
                <h5 style={{color:'white',marginTop:'9%', marginLeft:'10px'}}>Revenu</h5>
                <p style={{color:'white' , marginLeft:'10px'}}>75 000 fcfa</p>
              </Card.Text>
            </Card.Body>
          </Card>
             
          <Card style={{ border:'none', marginTop:'2%',boxShadow:'0 1px 5px' }}>
            <Card.Body>
             
               <h6 style={{float:'right',marginBottom:'5%'}}>Depenses mensuel<br></br><span style={{marginTop:'6px'}}>440.000 <b>FCFA</b></span><br></br><br></br><span style={{marginTop:'5%'}}>375.000 <b>FCFA</b></span>
               <br></br><span>Inscription</span><br></br><br></br><span>375.000 <b>FCFA</b></span><br></br><span>Mensualite</span>
               </h6>
              <Card.Text style={{background:'black', width:'50%', height:'140px', marginTop:'5%',padding:'10px',borderRadius:'10px'}}>
                <img style={{float:'right', marginTop:'2%', marginRight:'3%'}} src={iconerevenu} alt=''/>
                <p style={{marginBottom:'10%'}}></p>
                <h5 style={{color:'white',marginTop:'9%', marginLeft:'10px'}}>Revenu</h5>
                <p style={{color:'white' , marginLeft:'10px'}}>75 000 fcfa</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='table_accueil' style={{marginLeft:'0%', border:'none'}}>
            <Card.Body>
            <Card.Title style={{marginBottom:'5%', fontWeight:'bold'}}>Historique</Card.Title>

            <Table  striped bordered hover style={{borderRadius:'10px',boxShadow:'0 1px 8px 1px'}}>
        <thead>
          <tr>
            <th>Revenu</th>
            <th>Type</th>
            <th>Date</th>
            <th>Montant</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </Table>
            </Card.Body>
          </Card>

          <Card className='cardaccueil' style={{marginLeft:'0%', border:'none', boxShadow:'0 1px 5px', height:'287px', marginTop:'8%'}}>
            <Card.Body>
              <Card.Title style={{marginTop:'5%'}}>Statistique</Card.Title>
              <Card.Text style={{marginTop:'5%'}}>Revenu</Card.Text>
            <ProgressBar variant='success' now={60} />
              <Card.Text style={{marginTop:'5%'}}>Depenses</Card.Text>
            <ProgressBar variant='dark' now={60} />
           
            </Card.Body>
          </Card>
          <Card style={{marginLeft:'0%', border:'none'}}>
            <Card.Body>
            <Table striped  hover style={{borderRadius:'10px', boxShadow:'0 1px 8px 1px '}}>
        <thead>
          <tr>
            <th>Depenses</th>
            <th>Type</th>
            <th>Date</th>
            <th>Montant</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </Table>
            </Card.Body>
          </Card>
    </Row>
    
    );
    
}


export default Comment;