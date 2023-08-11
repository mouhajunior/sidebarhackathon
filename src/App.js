import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';
import Droit from './pages/Droit.jsx';
import Roles from './pages/Roles.jsx';
import Scolarite from './pages/Scolarite';
import Pointage from './pages/Pointage';
import Navbar from './components/Navbar';
import Professeur from './pages/Professeur';
import Nombreassocies from './pages/Nombreassocies';
import Nombreemplyer from './pages/Nombreemplyer';
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/Droit" element={<Droit />} />
          <Route path="/Roles" element={<Roles />} />
          <Route path="/Scolarite" element={<Scolarite />} />
          <Route path="/Pointage" element={<Pointage />} />
          <Route path='/Professeur' element={<Professeur/>}/>
          <Route path='/Nombreassocies' element={<Nombreassocies/>}/>
          <Route path='/Nombreemplyer' element={<Nombreemplyer/>}/>

        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;