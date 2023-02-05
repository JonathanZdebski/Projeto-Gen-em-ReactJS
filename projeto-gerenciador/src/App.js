import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contactt from './components/pages/Contactt';
import NewProject from './components/pages/NewProject';
import Project from './components/pages/Project';

import Container from './components/pages/layout/Container';
import Navbar from './components/pages/layout/Navbar'
import Footer from './components/pages/layout/Footer'
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
      <Navbar />
    <div>
      <Link to='/'></Link>
      <Link to='/contactt'></Link>
      <Link to='/company'></Link>
      <Link to='/newproject'></Link>
    </div>
    <Container customClass="min-height">
    <Routes>
      <Route exact path='/projects' element={<Projects />} />
      <Route path='/' element={<Home />} />
      <Route path='/company' element={<Company />} />
      <Route path='/contact' element={<Contactt />} />
      <Route path='/newproject' element={<NewProject />} />
      <Route path="project/:id" element={<Project />} />
    </Routes>
    </Container>
    <Footer />
  </Router>
  );
}

export default App;