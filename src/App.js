import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Home from './includes/Home.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './includes/Dashboard.js';

function App() {
  return (
         <BrowserRouter>
           <Routes>
               <Route path='/*' element={ <Home/>}/>
               <Route path='/Bajaj-Finance/*' element={<Dashboard/>}/>
              
           </Routes>
       </BrowserRouter>

           
  );
}

export default App;
