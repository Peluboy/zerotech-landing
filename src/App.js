import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Cloud from './pages/Cloud';

function App() {
  return (
    // <Home />

    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path = '/clients' element={ <Clients /> } />
        <Route path = '/cloud' element={ <Cloud /> } />
        
      {/* <Route path = '/about' element={ <About/> } />
      <Route path = '*' element={<Error404 />}/>  */}
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
