import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import NewRegistration from './pages/NewRegistration';
import Students from './pages/Students';
import Payments from './pages/Payments'; // Import Payments component
import Subjects from './pages/Subjects';
import Telugu from './subjectsubpages/Telugu';
import Hindi from './subjectsubpages/Hindi';
import English from './subjectsubpages/English';
import Maths from './subjectsubpages/Maths';
import Science from './subjectsubpages/Science';
import Social from './subjectsubpages/Social';
import ClassVI from './classessubpages/ClassVI';
import ClassVII from './classessubpages/ClassVII';
import ClassVIII from './classessubpages/ClassVIII';
import ClassIX from './classessubpages/ClassIX';
import ClassX from './classessubpages/ClassX';

function SidebarDashboard() {
  return (
    <div>
      <Navbar />
      <Sidebar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/newregistration" element={<NewRegistration />} />
          <Route path="/payments" element={<Payments />} /> {/* Route for Payments component */}
          <Route path="/subjects" element={<Subjects />}>
            <Route path="telugu" element={<Telugu />} />
            <Route path="hindi" element={<Hindi />} />
            <Route path="english" element={<English />} />
            <Route path="maths" element={<Maths />} />
            <Route path="science" element={<Science />} />
            <Route path="social" element={<Social />} />
          </Route>
          <Route path="/students" element={<Students />}>
            <Route path="classVI" element={<ClassVI />} />
            <Route path="classVII" element={<ClassVII />} />
            <Route path="classVIII" element={<ClassVIII />} />
            <Route path="classIX" element={<ClassIX />} />
            <Route path="classX" element={<ClassX />} />
          </Route>
        </Routes>
      </Sidebar>
      <Footer />
    </div>
  );
}

export default SidebarDashboard;
