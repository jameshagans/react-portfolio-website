import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import SignUp from './components/pages/SignUp'
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='about' exact element={<About/>} />
          <Route path='blog' exact element={<Blog />} />
          <Route path='sign-up' exact element={<SignUp />} />
        </Routes>
      </Router>
      <Footer /> 
    </>

  );
}

export default App;
