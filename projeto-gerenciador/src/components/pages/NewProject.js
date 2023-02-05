import styles from '../pages/NewProject.module.css';
import ProjectForm from '../project/ProjectForm';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

function NewProjects() {
    const history = useNavigate()
  
    function createPost(project) {
      // initialize cost and services
      project.cost = 0
      project.services = []
  
      fetch('http://localhost:5000/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      })
        .then((resp) => resp.json())
        .then((data) => {
          history('/projects', { state: {message: 'Projeto criado com sucesso!'} })
        })
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie o seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}   

export default NewProjects