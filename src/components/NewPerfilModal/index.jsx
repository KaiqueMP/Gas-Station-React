import React from 'react';
import './styles.css'
import avatar from '../../assets/avatar.jpeg'

export function NewPerfilModal(){

  return(
    <body>
      <div className="config-div">
        <header>
          <div className="container">
            <img src={avatar} alt="Foto" className="foto" />
            <p>
             <h2> Alterar foto </h2>
            </p>
          </div>
        </header>

       <div className="div-dados">
          <label> Nome
             <input type="text" name="nome" id="txt-nome" placeholder= "Nome Sobrenome" required />
          </label>

           <label> Email
            <input type="email" name="email" id="txt-email" placeholder= "example@gmail.com" required />
          </label>

          <label> Usuário
            <input type="text" name="user" id="txt-user" placeholder= "usuario_usuario" required />
          </label>

          <button className="botao-navegador">Navegador</button>

        </div>

        <nav className="botao-container">
            <button className="finalizar-botao"> Finalizar </button>
            <button className="botao-sair"> Sair </button>
        </nav>

        <nav className="nav-del">
          <div className="container-voltar">
            <button> voltar </button>
          </div>

          <div className="container-deletar">
            <button> deletar conta </button>
          </div>
        </nav>

      </div>
    </body>
  );
}