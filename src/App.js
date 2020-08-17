import React, { useState } from 'react';

import Header from './componentes/Header';
import Frase from './componentes/Frase';

import './App.css';
import backgroundImage from './assets/english.png';

function App() {
  const [projects, setlProjects]= useState(['Desenvolvimento de app', 'Front-end web']);
  // useState retorna um array com 2 posições

  // 1. variavel com o seu valor inicial
  // 2. função para atualização desse valor 

  function handleAddProject() {
//    projects.push(`Novo projeto ${Date.now()}`);   
    setlProjects([...projects, `Novo projeto ${Date.now()}`]);
    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />

      <img src={backgroundImage} width={300} alt=""/>

      <ul>
        {projects.map(project => <li key={project}>{project}</li> )}
      </ul>

      <button type="button" onClick={handleAddProject} >Adicionar projeto</button>
    </>
  );
}

export default App;