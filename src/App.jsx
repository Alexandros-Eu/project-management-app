import { useState } from 'react';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import SelectedProject from './components/SelectedProject.jsx';

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: []
  });

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

  const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectID)

  let content = <SelectedProject project={selectedProject}/>;

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
