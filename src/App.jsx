import Content from './components/Content.jsx';
import Sidebar from './components/Sidebar.jsx';
import Form from './components/Form.jsx';
import { useState } from 'react';

function App() {

  const [isDefault, setIsDefault] = useState(true);

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
      { !isDefault && <Form/>}
      { isDefault && <Content onSidebarClick={handleSidebarClick}/> }
    </>
  );
}

export default App;
