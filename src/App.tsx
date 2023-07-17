import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './page/Home';
import TicketManagement from './page/TicketManagement';
import TicketCheck from './page/TicketCheck';
import Service from './page/Service';




function App() {
  return (
   
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/manage' element={<TicketManagement/>}/>
     <Route path='/audit' element={<TicketCheck/>}/>
     <Route path='/service' element={<Service/>} />
     </Routes>
     </BrowserRouter> 
  
  );
}

export default App;








