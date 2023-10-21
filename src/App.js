import './styles.scss';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Packages from './pages/Packages';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />

      <div className='container'>
      <Routes>
      <Route path='/packages' element={<Packages />} ></Route>
      <Route path='/portfolio' element={<Portfolio />} ></Route>
      <Route path='/contact' element={<Contact />} ></Route>
      <Route path='/' element={<Home />} ></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
