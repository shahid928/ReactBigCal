import logo from './logo.svg';
import './App.css';
import {Route,Routes,useLocation} from 'react-router-dom'
import HomePage from './components/Home/Index';
import BlogList from './components/BlogList/Index';
import TopMenuNav from './components/Global/NavBar/TopMenuNav';
import Login from './components/Login/Index';
import ProtectedUserRoute from './ProtectedUserRoute';
import ListDetails from './components/List/Index';
import ContextDemo from './components/Context/Index';
import MyCalendar from './Schedular/Index';
import MyEventCalendar from './Schedular/BasicCalendar';

function App() {
  

  return (
    <>
    <TopMenuNav />
     <Routes>
      <Route exact path='/' element={<HomePage />}></Route>
      {/* <Route  path='/bloglist' element={<BlogList />}></Route> */}
      <Route exact path='/login' element={<Login />}></Route>
      <Route exact path='/contextlink' element={<ContextDemo />}></Route>
      <Route exact path='/mycal' element={<MyEventCalendar />}></Route>
      <Route  element={<ProtectedUserRoute />}>
      <Route exact path='/bloglist' element={<BlogList />}></Route>
      <Route exact path='/list' element={<ListDetails />}></Route>
     
      </Route>
     </Routes>
    </>
  );
}

export default App;
