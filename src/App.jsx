import {Route, Routes} from "react-router-dom";

import Countries from "./pages/Countries.jsx";
import Destinations from "./pages/Destination.jsx";
import DestinationDetails from "./pages/DestinationDetails.jsx";
import Home from "./pages/Home.jsx";

import './App.css'

function App() {

  return (
      <div className={'app-main bg-black/90 text-white min-h-[100vh]'}>
          <Routes>
              <Route path={'/'} element={<Home/>} />
              <Route path={'/:continentName/countries'} element={<Countries/>} />
              <Route path={'/:continentName/:countryName/destinations'} element={<Destinations/>} />
              <Route path={'/:continentName/:countryName/:destinationName/details'} element={<DestinationDetails/>} />
          </Routes>
      </div>
  )
}

export default App
