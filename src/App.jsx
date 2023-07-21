import Home from './Pages/Home'
import Country from './Pages/Country';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import City from './Pages/City';
export default function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/country/:name' element={<Country/>}/>
        <Route path='/city/:id' element={<City/>}/>
      </Routes>
    </div>
  )
}