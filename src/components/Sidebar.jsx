import React, { useState } from 'react';
import '../main.css'
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaMoneyBill,
    FaPersonBooth,
    FaPeopleArrows,
    FaThList,
    FaSchool,
    FaHandPointUp,
    FaAndroid
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Accueil",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"Personnel",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Comptabilite",
            icon:<FaMoneyBill/>
        },
        {
            path:"/comment",
            name:"Eleves",
            icon:<FaPersonBooth/>
        },
        {
            path:"/product",
            name:"Professeur",
            icon:<FaPeopleArrows/>
        },
        {
            path:"/productList",
            name:"Authentification",
            icon:<FaThList/>
        },

        {
            path:"/droit",
            name:"Droit",
            icon:<FaAndroid/>
        },

        {
            path:"/roles",
            name:"Roles",
            icon:<FaThList/>
        },
        
        {
            path:"/scolarite",
            name:"Scolarite",
            icon:<FaSchool/>
        },
        {
            path:"/pointage",
            name:"Pointage",
            icon:<FaHandPointUp/>
        }
    ]
    return (
        <div className="container" style={{float:'left'}}>
           <div style={{width: isOpen ? "200px" : "50px",}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Hackathon</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active"  >
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text ">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;