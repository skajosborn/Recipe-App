import './App.css';
import Navbar from './layouts/navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Register from './pages/Register';
import About from './pages/About';
import Recipes from './pages/RecipePg/RecipePg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/recipes' element={<Recipes />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/register' element={<Register />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
