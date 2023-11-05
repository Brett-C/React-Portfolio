import './App.css';
import {Routes, Route} from 'react-router-dom';
import About from './pages/about/index';
import Resume from './pages/resume/index';
import Contact from './pages/contact/index';
import Portfolio from './pages/portfolio/index';

function App() {
  return (
    <div className="App">
        {/* navBar */}

        {/* content pages*/}
    
      <Routes>
        <Route index path='/' element={<About/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
      </Routes>
    </div>
  );
}

export default App;





      // <header className="App-header">
      //   <h1>Brett Cannon</h1>
      //   <nav>
        
      //       <a href='aboutPage'>About me</a>
      //       <a href='portfolio'>Portfolio</a>
      //       <a href='contact'>Contact</a>
      //       <a href='resume'>Resume</a>
      //    </nav>
      //    <img src={picture} alt="picture of me" />
      // </header>
    

