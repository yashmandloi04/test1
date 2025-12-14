import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Add from '../Pages/Add'
import Edit from '../Pages/Edit'

const AllRoute = () => {
  return (
    <>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='add' element={<Add />} />
        <Route path='edit/:id' element={<Edit />} />
      </Routes>
    </>
  )
}

export default AllRoute