import Content from './components/Content.jsx';
import Sidebar from './components/Sidebar.jsx';
import Form from './components/Form.jsx';
import { useState } from 'react';

function App() {

  const [currentComponent, setCurrentComponent] = useState("defaultPage");
  const [formData, setFormData] = useState({title: "", description: "", date: ""});
  const [projectsData, setProjectsData] = useState([]);

  let currentProject;

  function handleInputChange(e, identifier)
  {
      setFormData(oldFormData => {
          return {...oldFormData, [identifier]: e.target.value}
      })
  }

  function handleAddProject()
  {
    if(currentComponent)
    {
      setCurrentComponent("projectForm");
    }
  }

  function handleFormSubmit(e, data)
  {
    e.preventDefault();

    setProjectsData(oldProjects => {
      return [...oldProjects, 
        {title: data.title, 
          description: data.description, 
          date: data.date
        }]
    })
  }

  function handleProjectClick(project)
  {
      setCurrentComponent("projectRendering");
      currentProject = project;
  }

  return (
    <>
      <Sidebar onAddProject={handleAddProject} projects={projectsData} onProjectClick={handleProjectClick}/>
      { currentComponent === "projectForm" ? <Form onFormChange={handleInputChange} formData={formData} onFormSubmit={handleFormSubmit}/> : undefined}
      { currentComponent === "defaultPage" ?  <Content onAddProject={handleAddProject}/> : undefined}
    </>
  );
}

export default App;
