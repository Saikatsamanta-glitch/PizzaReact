import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Footers} from './Components/Footer';
import Navb from './Components/Navb';
import Home from './Pages/Home';
import Login from './Pages/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navb />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>} />
        </Routes>
        <Footers/>
      </BrowserRouter>


    </div>
  );
}
export default App;
