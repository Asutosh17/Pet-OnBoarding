import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {RoutePath} from './Routes/RoutePath'

function App() {
  

  return (
    <div className="App">
       <Navbar/>
       <RoutePath/>
    </div>
  )
}

export default App
