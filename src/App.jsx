// Import necessary modules

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components and pages
import Home from './Home';
import Register from './Register';
import Login from './Login';
import SidebarDashboard from './SidebarDashboard';


// Define your App component
const App = () => {
  return (
    <BrowserRouter>
      {/* Always render SidebarDashboard */}
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        {/* Route to SidebarDashboard layout */}
        <Route path="/sidebardashboard" element={<SidebarDashboard />} />
        
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
