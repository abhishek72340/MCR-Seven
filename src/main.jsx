import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";

import App from './App.jsx'
import {TripAdvisorContextProvider} from "./contexts/tripAdvisorContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <TripAdvisorContextProvider>
              <App />
          </TripAdvisorContextProvider>
      </BrowserRouter>
  </React.StrictMode>
)
