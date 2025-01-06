import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MusicFolders from './Pages/musicFolders/MusicFolders'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OpenMFolder from './Pages/musicFolders/OpenMFolder'
import Dashboard from './Components/DashComponent/Dashboard'
import Home from './Pages/Home/Home'
import Browse from './Pages/Home/Browse'


function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route element={<MusicFolders />} path='/musicFolder' />
        <Route element={<OpenMFolder />} path='/openF' />
        <Route element={<Dashboard />} path='/dashboard' />
        <Route element={<Home/>} path='/home'  />
        <Route element={<Browse/>} path='/browse'  />
      </Routes>
    </BrowserRouter>

  )
}

export default App
