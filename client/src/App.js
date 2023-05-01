import './App.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Register from './components/users/Register';
import Dashboard from './components/dishes/Dashboard';
import DishForm from './components/dishes/DishForm';
import Main from './views/Main';
import OneDish from './components/dishes/OneDish';
import UpdateDish from './components/dishes/UpdateDish';
import DishCalendar from './views/DishCalendar';
import DisplayAllDishes from './components/dishes/DisplayAllDishes';
import DCMon from './components/dishes/DCMon';
import DCTue from './components/dishes/DCTue';
import DCWed from './components/dishes/DCWed';
import DCThu from './components/dishes/DCThu';
import DCFri from './components/dishes/DCFri';
import DCSat from './components/dishes/DCSat';
import DCSun from './components/dishes/DCSun';
import Login from './components/users/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/main' element={<Main/>} default/>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/allDishes' element={<DisplayAllDishes/>}/>
          <Route path='/newDish' element={<DishForm/>}/>
          <Route path='/oneDish/:id' element={<OneDish/>}/>
          <Route path='/updateDish/:id' element={<UpdateDish/>}/>
          <Route path='/dishCalendar' element={<DishCalendar/>}/>
          <Route path='/dishCalendar/DCMon/:id' element={<DCMon/>}/>
          <Route path='/DCTue/:id' element={<DCTue/>}/>
          <Route path='/DCWed/:id' element={<DCWed/>}/>
          <Route path='/DCThu/:id' element={<DCThu/>}/>
          <Route path='/DCFri/:id' element={<DCFri/>}/>
          <Route path='/DCSat/:id' element={<DCSat/>}/>
          <Route path='/DCSun/:id' element={<DCSun/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;