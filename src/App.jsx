import { useState } from 'react'
import './App.css'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
   <BrowserRouter>
   <div>
    <div className='header text-center my-4' style={{color:'blue'}}>
        <h1>Axios CRUD</h1>
    </div>
    <Routes>
      <Route path='/' element={<Read/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/update' element={<Update/>}/>
    </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App
