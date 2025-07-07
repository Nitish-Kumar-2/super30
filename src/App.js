import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
        
// DRY - Don't Repeat Yourself

function App() {

  return (
    <BrowserRouter>
      <Header />
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
