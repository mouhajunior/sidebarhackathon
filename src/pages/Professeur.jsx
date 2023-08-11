import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import '../App.css'
import {
FaTrash,
FaEdit,
FaPlus
}from "react-icons/fa";
const initialData = [
  { id: 'Fall', name: 'Absa', age: 'Math', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
  { id: 'Gueye', name: 'Ousseynou', age: 'Anglais', city: '77 700 00 00',classe:'2nd L ; 1er L2; 1S' },
  { id: 'Samb', name: 'Oumou khairy', age: 'Espagnol', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
  { id: 'Mbodj', name: 'Maodo', age: 'Arabe', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
  { id: 'Toure', name: 'Sada', age: 'EPS', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
  { id: 'Marre', name: 'Sophie', age: 'Francais', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
  { id: 'Dia', name: 'Abou', age: 'SVT', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
  { id: 'Sarr', name: 'Ndeye Fatou ', age: 'PC', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
  { id: 'Seck', name: 'Maimouna', age: 'Philosophie', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
  { id: 'Diouf', name: 'Ousmane', age: 'Maths', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
  { id: 'Ndiaye', name: 'Ousmane', age: 'Francais', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
  { id: 'Diop', name: 'Ngone', age: 'Anglais', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
  { id: 'Seck', name: 'Kara', age: 'EPS', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
  { id: 'Kebe', name: 'Makhtar', age: 'PC', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
  { id: 'Mbenge', name: 'Khadim', age: 'Philosophie', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
  { id: 'Mbaye', name: 'Fatima', age: 'Anglais', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
  { id: 'Dieng', name: 'Saliou', age: 'Maths', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
  { id: 'Mbenge', name: 'Khadim', age: 'Philosophie', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
  { id: 'Mbaye', name: 'Fatima', age: 'Anglais', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
  { id: 'Dieng', name: 'Saliou', age: 'Maths', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
  { id: 'Mbenge', name: 'Khadim', age: 'Philosophie', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
  { id: 'Mbaye', name: 'Fatima', age: 'Anglais', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
  { id: 'Dieng', name: 'Saliou', age: 'Maths', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
  { id: 'Mbenge', name: 'Khadim', age: 'Philosophie', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
  { id: 'Mbaye', name: 'Fatima', age: 'Anglais', city: '77 700 00 00',classe:'2nd L ; 1er L2; TI l' },
];

const Comment = () => {
  const [data, setData] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [newData, setNewData] = useState({
    id: '',
    name: '',
    age: '',
    classe: '',
    city: '',
  });

  const [selectedDataIndex, setSelectedDataIndex] = useState(-1);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleAddData = () => {
    setData([...data, newData]);
    setNewData({
      id: '',
      name: '',
      age: '',
      city: '',
    });
    handleCloseModal();
  };

  const handleEditData = (index) => {
    setSelectedDataIndex(index);
    const selectedData = data[index];
    setNewData({ ...selectedData });
    handleShowModal();
  };

  const handleSaveEdit = () => {
    const newDataArray = [...data];
    newDataArray[selectedDataIndex] = newData;
    setData(newDataArray);
    handleCloseModal();
  };

  const handleDeleteData = (index) => {
    const newDataArray = data.filter((_, i) => i !== index);
    setData(newDataArray);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
      <div className="container mt-4">
        <div className='btnplus' style={{position:'absolute', left:'39%',boxShadow:'0 1px 8px', borderRadius:'80px'}}>
        <Button className='btnplus' style={{fontSize:'50px', borderRadius:'80px', width:'100px', height:'100px'}} variant="dark" onClick={handleShowModal}>
         
        <FaPlus className='faplus'/>
      </Button>
    
        </div>
      
        <Row  xs={1} md={1} sm={1} className="mytable" style={{width:'1040px', height:'200px', border:'none', background:'none', marginTop:'7%'}}>
          <Card  style={{border:'none', background:'none'}}>
      <Table striped bordered hover style={{ borderRadius: '10px', marginTop:'29%' }}>
        <thead>
          <tr  style={{background:'rgb(22, 162, 0)'}}>
            <th style={{background:'rgb(22, 162, 0)'}}>Nom</th>
            <th style={{background:'rgb(22, 162, 0)'}}>Prenom</th>
            <th style={{background:'rgb(22, 162, 0)'}}>Matiere</th>
            <th style={{background:'rgb(22, 162, 0)'}}>Coordonneés</th>
            <th style={{background:'rgb(22, 162, 0)'}}>Classe</th>
            <th style={{background:'rgb(22, 162, 0)'}}>Actions</th>
          </tr>
        </thead>
        <tbody className='mytbody'>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
              <td>{item.classe}</td>
              <td className='trash'>
                <Button className='trashh' style={{borderRadius:'20px'}} variant="dark" onClick={() => handleDeleteData(index)}>
                <FaTrash className='trash'/>
                </Button>
                <Button className='trashh' style={{marginLeft:'8%', borderRadius:'18px'}} variant="dark" onClick={() => handleEditData(index)}>
                  <FaEdit className='trash2'/>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedDataIndex === -1 ? 'Ajouter de nouvelles données' : 'Modifier les données'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Nom</label>
              <input
                type="text"
                className="form-control"
                name="id"
                value={newData.id}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Prenom</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={newData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Matiere</label>
              <input
                type="text"
                className="form-control"
                name="age"
                value={newData.age}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Coordonnees</label>
              <input
                type="text"
                className="form-control"
                name="city"
                value={newData.city}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Classe</label>
              <input
                type="text"
                className="form-control"
                name="classe"
                value={newData.classe}
                onChange={handleChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fermer
          </Button>
          {selectedDataIndex === -1 ? (
            <Button variant="primary" onClick={handleAddData}>
              Ajouter
            </Button>
          ) : (
            <Button variant="primary" onClick={handleSaveEdit}>
              Sauvegarder
            </Button>
          )}
        </Modal.Footer>
      </Modal>
      </Card>
      </Row>
    </div>
  );
};

export default Comment;
