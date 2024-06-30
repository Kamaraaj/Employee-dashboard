import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import EmpList from "./pages/EmpList";
import EmpCreate from './pages/EmpCreate';
import EmpEdit from './pages/EmpEdit';
import EmpDetails from './pages/EmpDetails';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmpList />} />
        <Route path='employee'>
        <Route path='create' element={<EmpCreate />} />
        <Route path='edit/:empid' element={<EmpEdit />} />
        <Route path='details/:empid' element={<EmpDetails />} />
        </Route>
      </Routes>
      </BrowserRouter>
         
    </React.Fragment>

  );
}

export default App;
