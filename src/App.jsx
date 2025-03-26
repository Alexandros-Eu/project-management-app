import { useState } from 'react';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import SelectedProject from './components/SelectedProject.jsx';

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text)
  {
    setProjectsState(prevState => {

      const taskID = Math.random();
      const newTask = {
        id: taskID,
        projectID: prevState.selectedProjectID,
        text: text
      }

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }

  function handleDeleteTask(id)
  {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => {
          return task.id !== id
        })
      }
    })
  }

  function handleStartAddProject()
  {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: null
      }
    })
  }

  function handleSelectProject(id)
  {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: id
      }
    })
  }

  function handleCancelProject()
  {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: undefined
      }
    })
  }

  function handleAddProject(projectData)
  {
    const newProject = {
      ...projectData,
      id: Math.random()
    }

    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleDeleteProject()
  {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectID)
      }
    })
  }

  const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectID)

  let content = (
    <SelectedProject 
      project={selectedProject} 
      onDelete={handleDeleteProject} 
      onAddTask={handleAddTask} 
      onDeleteTask={handleDeleteTask} 
      tasks={projectsState.tasks}/>
  );

  if(projectsState.selectedProjectID === null)
  {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject}/>
  }
  else if(projectsState.selectedProjectID === undefined)
  {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject} selectedProjectID={projectsState.selectedProjectID}/>
      {content}
    </main>
  );
}

export default App;
