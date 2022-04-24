import React from "react";
import  {Routes, Route} from 'react-router-dom'
import { CreateData } from "../components/CreateData/CreateData";
import { Entity } from "../components/Data/Entity";
import { Home } from "../components/Home/Home";



export const RoutePath = () => {
  return (
    <div>

    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/listing-create" element={<CreateData/>}></Route>
        <Route path='/:id' element={<Entity/>}></Route>
    </Routes>

    </div>
  )
}
