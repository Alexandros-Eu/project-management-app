import { useState } from 'react';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';

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

  function handleAddProject(projectData)
  {
    const newProject = {
      ...projectData,
      id: Math.random()
    }

    setProjectsState(prevState => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  let content;

  if(projectsState.selectedProjectID === null)
  {
    content = <NewProject onAdd={handleAddProject}/>
  }
  else if(projectsState.selectedProjectID === undefined)
  {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  console.log(projectsState);

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
