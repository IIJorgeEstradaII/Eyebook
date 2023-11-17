import React from 'react'
import ReactDOM from 'react-dom/client'
/* import App from './App.tsx' */
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import "../src/assets/styles/reset.css"
import { LoginPage } from './components/pages/LoginPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
      </Routes>
    </Router>
  </React.StrictMode>,


  
)
