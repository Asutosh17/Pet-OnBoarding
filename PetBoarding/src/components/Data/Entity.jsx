import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from "react-router"

export const Entity = () => {

  const [state,setState] = useState([])
  const {id} = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8080/listing/${id}`)
    .then((res) => setState(res.data))
  },[id])

  let {name,city, address,capacity,cost_per_day,verified,rating} = state

  return (
    <div className='App'>
    <br /><br /><br />
          <h1>Entity Details page</h1>
          <div>
          <h2>Name of Center: {name}</h2>
          <h2>City : {city}</h2>
          <h2>Address : {address}</h2>
          <h2>Capacity : {capacity}</h2>
          <h2>Cost per Day : {cost_per_day}</h2>
          <h2>verification Status : {verified}</h2>
          <h2>Rating : {rating}</h2>
          </div>
        </div>
  )
}
