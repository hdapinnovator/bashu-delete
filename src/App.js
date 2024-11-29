import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Delete from './Pages/Delete'
import Policy from './Pages/Policy'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Delete />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
