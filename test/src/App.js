import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import LoginComp from './components/LoginComp';
import DashboardComp from './components/DashboardComp';
import ApiComp from './components/ApiComp';
import HomeComp from './components/HomeComp';
import TodolistComp from './components/TodolistComp';

import { Route, BrowserRouter,Routes  } from "react-router-dom";
import ContactComp from './components/ContactComp';

function App() {

  return (
    <BrowserRouter>
      <NavbarComp />
      <Routes>
      <Route path='/' element={<HomeComp/>} />
          <Route path='/Login' element={<LoginComp/>} />
          <Route path='/ApiTester' element={<ApiComp/>} />
          <Route path='/Home' element={<HomeComp/>} />
          <Route path='/Contact' element={<ContactComp/>} />
          <Route path='/TodolistComp' element={<TodolistComp/>} />
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;

{/* {currentPage} */}
{/* <NavbarComp/> */}
{/* <LoginComp/> */}
{/* <DashboardComp /> */}
{/* <ApiComp />*/}