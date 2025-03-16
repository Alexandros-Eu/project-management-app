import Content from './components/Content.jsx';
import Sidebar from './components/Sidebar.jsx';
import Form from './components/Form.jsx';
import Project from './components/Project.jsx';
import TaskForm from './components/TaskForm.jsx';
import { useState } from 'react';

function App() {

  const [currentComponent, setCurrentComponent] = useState("defaultPage");
  const [formData, setFormData] = useState({title: "", description: "", date: ""});
  const [isFormValid, setIsFormValid] = useState(false);
  const [projectsData, setProjectsData] = useState([]);
  const [currentProject, setCurrentProject] = useState();
  const [task, setTask] = useState("");
 
  

  function handleInputChange(e, identifier)
  {
      setFormData(oldFormData => {
          return {...oldFormData, [identifier]: e.target.value}
      })

      const formToBeValidated = {
        ...formData,
        [identifier]: e.target.value
      };

      validate(formToBeValidated);
  }

  function handleAddProject()
  {
    if(currentComponent)
    {
      setCurrentComponent("projectForm");
    }
  }

  const validate = (data) => {
    if(data.title.length > 0 && data.description.length > 0 && data.date.length > 0)
    {
      setIsFormValid(true);
    }
    else
    {
      setIsFormValid(false);
    }
  }

  function handleFormSubmit(e, data)
  {
    if(e.target.name === "cancel")
    {
      return;
    }

    e.preventDefault();

    setProjectsData(oldProjects => {
      setFormData({title: "", description: "", date: ""});
      setIsFormValid(false);
      return [...oldProjects, 
        {title: data.title, 
          description: data.description, 
          date: data.date,
          tasks: []
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

      if(e.target.name === "clear")
      {
        return;
      }

      setProjectsData(oldProjects => {
        return oldProjects.map(oldProject => {

          if(oldProject.title === currentProject.title)
          {
            setCurrentProject(oldCurrentProject => {
              return {...oldCurrentProject, 
                tasks: [...oldProject.tasks, task]
              }
            })
            return {...oldProject, 
              tasks: [...oldProject.tasks, task]
            }
          }
          return oldProject;
        })
      })

      setTask("");

  }

  function removeTask(e, taskForRemoval)
  {

    setProjectsData(oldProjects => {
      return oldProjects.map(project => {
        if(project.description === currentProject.description)
        {
          let newTasks = project.tasks.filter(task => task !== taskForRemoval)
          setCurrentProject(oldCurrentProject => {
            return {...oldCurrentProject, 
              tasks: newTasks
            }
          })
          return {...project, 
            tasks: newTasks}
        }
        return {...project}
      })
    })
  }

  function removeProject(e, project)
  {
    setProjectsData(oldProjects => {
      return oldProjects.filter(oldProject => {
        return oldProject.description !== project.description
      })
    })

    setCurrentComponent("defaultPage");
  }

  return (
    <>
      <Sidebar onAddProject={handleAddProject} projects={projectsData} onProjectClick={handleProjectClick}/>
      { currentComponent === "projectForm" ? <Form onFormChange={handleInputChange} formData={formData} onFormSubmit={handleFormSubmit} isValid={isFormValid}/> : undefined}
      { currentComponent === "defaultPage" ?  <Content onAddProject={handleAddProject}/> : undefined}
      { currentComponent === "projectRendering" ? <Project project={currentProject} onProjectDelete={removeProject}/> : undefined}
      { currentComponent === "projectRendering" ? <TaskForm task={task} onTaskChange={handleTaskChange} onTaskSubmit={handleTaskFormSubmit} taskData={currentProject.tasks} onTaskDelete={removeTask}/> : undefined}
    </>
  );
}

export default App;
