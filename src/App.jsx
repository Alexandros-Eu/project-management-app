import Content from './components/Content.jsx';
import Sidebar from './components/Sidebar.jsx';
import Form from './components/Form.jsx';
import Project from './components/Project.jsx';
import TaskForm from './components/TaskForm.jsx';
import { useState } from 'react';

function App() {

  const [currentComponent, setCurrentComponent] = useState("defaultPage");
  const [formData, setFormData] = useState({title: "", description: "", date: ""});
  const [projectsData, setProjectsData] = useState([]);
  const [currentProject, setCurrentProject] = useState();
  const [task, setTask] = useState("");
  const [taskData, setTaskData] = useState([]);
  

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
      setCurrentProject(project);
  }

  function handleTaskChange(e)
  {
      setTask(e.target.value);
  }

  function handleTaskFormSubmit(e)
  {
      e.preventDefault();

      setTaskData(oldTaskData => {
          return [...oldTaskData, task];
      })
  }

  return (
    <>
      <Sidebar onAddProject={handleAddProject} projects={projectsData} onProjectClick={handleProjectClick}/>
      { currentComponent === "projectForm" ? <Form onFormChange={handleInputChange} formData={formData} onFormSubmit={handleFormSubmit}/> : undefined}
      { currentComponent === "defaultPage" ?  <Content onAddProject={handleAddProject}/> : undefined}
      { currentComponent === "projectRendering" ? <Project project={currentProject}/> : undefined}
      { currentComponent === "projectRendering" ? <TaskForm task={task} onTaskChange={handleTaskChange} onTaskSubmit={handleTaskFormSubmit} taskData={taskData}/> : undefined}
    </>
  );
}

export default App;
