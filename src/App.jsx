import Content from './components/Content.jsx';
import Sidebar from './components/Sidebar.jsx';
import Form from './components/Form.jsx';
import { useState } from 'react';

function App() {

  const [isDefault, setIsDefault] = useState(true);
  const [formData, setFormData] = useState({title: "", description: "", date: ""});
  const [projectsData, setProjectsData] = useState([]);

  function handleInputChange(e, identifier)
  {
      setFormData(oldFormData => {
          return {...oldFormData, [identifier]: e.target.value}
      })
  }

  function handleSidebarClick()
  {
    if(isDefault)
    {
      setIsDefault(!isDefault);
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

  return (
    <>
      <Sidebar onSidebarClick={handleSidebarClick} projects={projectsData}/>
      { !isDefault && <Form onFormChange={handleInputChange} formData={formData} onFormSubmit={handleFormSubmit}/>}
      { isDefault && <Content onSidebarClick={handleSidebarClick}/> }
    </>
  );
}

export default App;
