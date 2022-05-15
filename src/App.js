
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Breakfast from './Pages/Home/Breakfast/Breakfast';
import Home from './Pages/Home/Home/Home';
import Lunch from './Pages/Home/Lunch/Lunch';
import Dinner from './Pages/Home/Dinner/Dinner';
import Breakfasts from './Pages/Home/Breakfast/Breakfasts';
import Lunches from './Pages/Home/Lunch/Lunches';
import Dinners from './Pages/Home/Dinner/Dinners';
import Login from './Pages/Shared/Login/Login';
import SignUp from './Pages/Shared/SignUp/SignUp';
import Services from './Pages/Home/Services/Services';


function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/breakfast' element={<Breakfast></Breakfast>}></Route>
        <Route path='/breakfasts' element={<Breakfasts></Breakfasts>}></Route>
        <Route path='/lunch' element={<Lunch></Lunch>}></Route>
        <Route path='/lunches' element={<Lunches></Lunches>}></Route>
        <Route path='/dinner' element={<Dinner></Dinner>}></Route>
        <Route path='/dinners' element={<Dinners></Dinners>}></Route>
        <Route path='/login' element = {<Login></Login> }></Route>
        <Route path='/login' element = {<SignUp></SignUp>}></Route>
        <Route path='/login' element = {<Services></Services>}></Route>

        
      </Routes>
    </div>
  );
}

export default App;
