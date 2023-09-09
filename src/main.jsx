import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Navbar from './containers/nav/Navbar'
import Tracker from './containers/Tracker/Tracker'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Navbar /> */}
    <Tracker />
  </React.StrictMode>,
)
