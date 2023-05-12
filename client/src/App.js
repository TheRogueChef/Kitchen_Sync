import './App.css';
import  React  from 'react';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Register from './components/users/Register';
import Dashboard from './components/dishes/Dashboard';
import DishForm from './components/dishes/DishForm';
import OneDish from './components/dishes/OneDish';
import UpdateDish from './components/dishes/UpdateDish';
import DisplayAllDishes from './components/dishes/DisplayAllDishes';
import DishApi from './components/dishes/DishApi';
import DisplayPage from './views/DisplayPage';
import Login from './components/users/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/allDishes' element={<DisplayAllDishes/>}/>
          <Route path='/displayPage' element={<DisplayPage/>}default/>
          <Route path='/newDish' element={<DishForm/>}/>
          <Route path='/dishApi' element={<DishApi/>}/>
          <Route path='/oneDish/:id' element={<OneDish/>}/>
          <Route path='/updateDish/:id' element={<UpdateDish/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;