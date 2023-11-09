import './App.css';
import {Routes, Route} from 'react-router-dom';
import About from './pages/about/index';
import Resume from './pages/resume/index';
import Contact from './pages/contact/index';
import Portfolio from './pages/portfolio/index';
import Navbar from './component/navBar';
import Footer from './component/footer'

function App() {
  return (
    <div className="App">
        {/* navBar */}
        <Navbar />

        {/* content pages*/}
    
      <Routes>
        <Route index path='/' element={<About/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
      </Routes>

        <Footer />
    </div>
  );
}

export default App;
