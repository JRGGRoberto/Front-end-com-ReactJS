import React, { useState, useEffect } from 'react';
import api from './services/api';

import Header from './componentes/Header';
import Frase from './componentes/Frase';

import './App.css';

function App() {
  const [projects, setlProjects]= useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setlProjects(response.data);
    });
  }, []);
  
  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Roberto Góes',
    });

    const project = response.data;

    setlProjects([...projects, project]);

  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li> )}
      </ul>

      <button type="button" onClick={handleAddProject} >Adicionar projeto</button>
    </>
  );
}

export default App;