import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

import {
FaTrash,
FaEdit,
FaPlus
}from "react-icons/fa";
const initialData = [
  { id: 'Fall', name: 'Absa',  city: '77 700 00 00' },
  { id: 'Gueye', name: 'Ousseynou', city: '77 700 00 00'},
  { id: 'Samb', name: 'Oumou khairy',  city: '77 700 00 00'},
  { id: 'Mbodj', name: 'Maodo',  city: '77 700 00 00' },
  { id: 'Toure', name: 'Sada', city: '77 700 00 00' },
  { id: 'Marre', name: 'Sophie', city: '77 700 00 00' },
  { id: 'Dia', name: 'Abou', city: '77 700 00 00' },
  { id: 'Sarr', name: 'Ndeye Fatou ', city: '77 700 00 00' },
  { id: 'Seck', name: 'Maimouna',  city: '77 700 00 00' },
  { id: 'Diouf', name: 'Ousmane', city: '77 700 00 00' },
  { id: 'Ndiaye', name: 'Ousmane',  city: '77 700 00 00'},
  { id: 'Diop', name: 'Ngone',  city: '77 700 00 00' },
  { id: 'Seck', name: 'Kara', city: '77 700 00 00'},
  { id: 'Kebe', name: 'Makhtar', city: '77 700 00 00' },
  { id: 'Mbenge', name: 'Khadim',  city: '77 700 00 00'},
 



];

const Nombreemplyer = () => {
  const [data, setData] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [newData, setNewData] = useState({
    id: '',
    name: '',
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
       
        <div style={{position:'absolute', left:'39%',boxShadow:'0 1px 8px', borderRadius:'80px'}}>
        <Button className='bouton_ajout' style={{fontSize:'50px', borderRadius:'80px', width:'100px', height:'100px'}} variant="dark" onClick={handleShowModal}>
         
        <FaPlus/>
      </Button>
    
        </div>
        <div style={{marginTop:'16%', position:'absolute', left:'%'}}>
        <h3  className='liste_assoc'  style={{color:'rgb(113, 118, 122)'}}>Liste de tous les Employes</h3>
        <input style={{float:'right', position:'absolute', left:'215%', width:'85%', top:'-8%', border:'none', boxShadow:'0 1px 8px', height:'35px', borderRadius:'10px'}} placeholder=' Rechercher un employé'></input>
        </div>
      
      <Table className='table' striped bordered hover style={{ borderRadius: '10px', marginTop:'29%' }}>
        <thead>
          <tr  style={{background:'rgb(22, 162, 0)'}}>
            <th style={{background:'rgb(22, 162, 0)'}}>Nom</th>
            <th style={{background:'rgb(22, 162, 0)'}}>Prenom</th>
            <th style={{background:'rgb(22, 162, 0)'}}>Coordonneés</th>
            
            <th style={{background:'rgb(22, 162, 0)'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.city}</td>
             
              <td>
                <Button style={{marginRight:'5%'}} variant="dark" onClick={() => handleEditData(index)}>
                  <FaEdit/>
                </Button>
                <Button variant="dark" onClick={() => handleDeleteData(index)}>
                <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedDataIndex === -1 ?  'Ajouter un employé' : 'Modifier les donnees de l employé' }
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
              <label>Coordonnees</label>
              <input
                type="text"
                className="form-control"
                name="city"
                value={newData.city}
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
    </div>
  );
};

export default Nombreemplyer;





