import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './page/Home';
import TicketManagement from './page/TicketManagement';




function App() {
  return (
   
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/manage' element={<TicketManagement/>}/>
     </Routes>
     </BrowserRouter> 
  
  );
}

export default App;








