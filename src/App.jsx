import Content from './components/Content.jsx';
import Sidebar from './components/Sidebar.jsx';
import Form from './components/Form.jsx';
import { useState } from 'react';

function App() {

  const [isDefault, setIsDefault] = useState(true);
  const [formData, setFormData] = useState({title: "", description: "", date: ""});
  
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

  return (
    <>
      <Sidebar onSidebarClick={handleSidebarClick}/>
      { !isDefault && <Form onFormChange={handleInputChange} formData={formData}/>}
      { isDefault && <Content onSidebarClick={handleSidebarClick}/> }
    </>
  );
}

export default App;
