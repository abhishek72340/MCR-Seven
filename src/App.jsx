import Home from './Pages/Home'
import Country from './Pages/Country';
import './App.css';
import { Route, Routes } from 'react-router-dom';
export default function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/country/:name' element={<Country/>}/>
      </Routes>
    </div>
  )
}