import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>,
)


// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import { BrowserRouter } from "react-router-dom"
// import "./index.css"
// import AppContextProvider from './context/Context.jsx'



// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <AppContextProvider>
//        <App />
//     </AppContextProvider>
//   </BrowserRouter>,
// )




