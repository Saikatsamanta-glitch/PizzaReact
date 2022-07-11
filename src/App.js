import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navb from './Components/Navb';
import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navb />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}
export default App;
