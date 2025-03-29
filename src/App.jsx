import Content from './components/Content.jsx';
import Sidebar from './components/Sidebar.jsx';
import Form from './components/Form.jsx';
import Project from './components/Project.jsx';
import TaskForm from './components/TaskForm.jsx';
import { useState } from 'react';

function App() {

  const [currentComponent, setCurrentComponent] = useState("defaultPage");  // Controls which component is currently displayed ('defaultPage', 'projectForm', 'projectRendering')
  const [formData, setFormData] = useState({title: "", description: "", date: ""}); // Manages project form input values
  const [isFormValid, setIsFormValid] = useState(false); // Tracks if all required project form fields are filled
  const [projectsData, setProjectsData] = useState([]); // Array of all projects with their associated tasks
  const [currentProject, setCurrentProject] = useState(); // Currently selected project for viewing
  const [task, setTask] = useState(""); // Current task input value 
 
  

  function handleInputChange(e, identifier) // Handler for the input changes in the Project Form
  {
      // Updates form data and triggers validation on every input change
      setFormData(oldFormData => {
          return {...oldFormData, [identifier]: e.target.value}
      })

      // Creates a new form object with the latest change for validation
      const formToBeValidated = {
        ...formData,
        [identifier]: e.target.value
      };

      validate(formToBeValidated);
  }

  function handleAddProject() // Handler for adding a new project
  {
    if(currentComponent)
    {
      setCurrentComponent("projectForm"); // Renders the Project Form
    }
  }

  const validate = (data) => {  // Validates the Form that is not empty
    if(data.title.length > 0 && data.description.length > 0 && data.date.length > 0)
    {
      setIsFormValid(true);
    }
    else
    {
      setIsFormValid(false);
    }
  }

  function handleFormSubmit(e, data, modal)  // Handler for Form Submission (addition of a new project)
  {
    e.preventDefault(); // Prevents the default behavior of a form

    if(e.target.name === "cancel")  // If the source of the event is from 'cancel' it returns
    {
      setCurrentComponent("defaultPage"); // Redirect to the default Home Page
      setFormData({title: "", description: "", date: ""}); // Resets the form's data inputs
      return;
    }

    if(!isFormValid)  // Display error modal if form validation fails (missing title, description, or date)
    {
      modal.current.open();
      return;
    }


    setProjectsData(oldProjects => {
      setFormData({title: "", description: "", date: ""});  // Reset the Form state
      setIsFormValid(false);  // Reset the validation
      return [...oldProjects, 
        {title: data.title, 
          description: data.description, 
          date: data.date,
          tasks: []
        }]
    })
  }

  function handleProjectClick(project)  // Handler for selecting a Project
  {
      setCurrentComponent("projectRendering");  // Renders a specific project
      setCurrentProject(project); // Sets the 'Current Project' state to the one selected
  }

  function handleTaskChange(e) // Handler for Task Form changes
  {
      setTask(e.target.value);
  }

  function handleTaskFormSubmit(e)  // Handler for Task Form Submission
  {
      e.preventDefault();

      if(e.target.name === "clear") // If the Task Form submission is from the 'clear' button ignore it
      {
        return;
      }

      setProjectsData(oldProjects => {
        return oldProjects.map(oldProject => {

          if(oldProject.title === currentProject.title) // Finds the current project from the CurrentProject
          {
            setCurrentProject(oldCurrentProject => {
              return {...oldCurrentProject, 
                tasks: [...oldProject.tasks, task]  // Adds the new task to CurrentProject
              }
            })
            return {...oldProject, 
              tasks: [...oldProject.tasks, task] // Adds the new task to ProjectsData state
            }
          }
          return oldProject;
        })
      })

      setTask(""); // Reset the task state

  }

  function removeTask(e, taskForRemoval) // Handler for task deletion
  {

    setProjectsData(oldProjects => {
      return oldProjects.map(project => {
        if(project.description === currentProject.description) // Finds the current project from the CurrentProject
        {
          let newTasks = project.tasks.filter(task => task !== taskForRemoval) // Creates a new array with all the tasks except the one for removal
          setCurrentProject(oldCurrentProject => {
            return {...oldCurrentProject,
              tasks: newTasks // Copies the newly created task array to CurrentProject state
            }
          })
          return {...project, 
            tasks: newTasks} // Copies the newly created task array to ProjectsData state
        }
        return {...project}
      })
    })
  }

  function removeProject(e, project)  // Handler for project deletion
  {
    setProjectsData(oldProjects => {
      return oldProjects.filter(oldProject => {
        return oldProject.description !== project.description // Returns a new array with all the projects except the one for removal
      })
    })

    setCurrentComponent("defaultPage"); // Sets the rendering to the Default Page
  }

  return (
    <>
      {/* Sidebar is always rendered, other components render conditionally based on currentComponent state */}
      <Sidebar onAddProject={handleAddProject} projects={projectsData} onProjectClick={handleProjectClick}/>

      {/* Conditional rendering based on currentComponent value */}
      { currentComponent === "projectForm" ? <Form onFormChange={handleInputChange} formData={formData} onFormSubmit={handleFormSubmit}/> : undefined}
      { currentComponent === "defaultPage" ?  <Content onAddProject={handleAddProject}/> : undefined}
      { currentComponent === "projectRendering" ? <Project project={currentProject} onProjectDelete={removeProject}/> : undefined}
      { currentComponent === "projectRendering" ? <TaskForm task={task} onTaskChange={handleTaskChange} onTaskSubmit={handleTaskFormSubmit} taskData={currentProject.tasks} onTaskDelete={removeTask}/> : undefined}
    </>
  );
}

export default App;
