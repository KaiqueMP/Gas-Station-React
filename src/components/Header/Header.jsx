import './styles.css';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.jpeg';
import Modal from 'react-modal';
import React, { useState } from 'react';
import {NewPerfilModal} from '../NewPerfilModal'

export function Header ({}){

  const [isNewPerfilModalOpen, setIsNewPerfilModalOpen] = useState(false);

  function handleOpenNewPerfilModal(){
    setIsNewPerfilModalOpen(true);
  }

  function handleCloseNewPerfilModal(){
    setIsNewPerfilModalOpen(false);
  }

  return (
    <div className="header ">
    
       <div className="container items-header">
       <img src={logo} alt="Gas Station" />

       <div className="controllers">
        <div className="select"  >
        
            <select>
              <option value="1">Todos combustíveis</option>
              <option value="2">Gasolina comum</option>
              <option value="3">Gasolina Atitivada</option>
              <option value="4">Álcool</option>
              <option value="5">Diesel</option>
            </select>
          </div>

          <div className="select">
          <select>
            <option value="1">Todos os postos</option>
            <option value="2">Petrobras</option>
            <option value="3">Shell</option>
            <option value="4">Ipiranga</option>
            <option value="5">Ale</option>
          </select>
          </div>

          </div>

        <div className="user">
         <img src={avatar} alt="imagem de perf il" />
         <div className="user-desc">
         <p className="user-name">Rafael Lima</p>
          <button type="button" onClick={handleOpenNewPerfilModal} >Acessar perfil</button> 

          <Modal 
            isOpen={isNewPerfilModalOpen} 
            onRequestClose={handleCloseNewPerfilModal}
          >
            <NewPerfilModal />
          </Modal>
          

         </div>
       </div>

       </div>

       
      
    </div>
  )
}