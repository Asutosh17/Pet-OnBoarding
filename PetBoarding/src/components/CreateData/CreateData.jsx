import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addData } from '../Redux/action';

export const CreateData = () => {

  let navigate = useNavigate()

  let dispatch = useDispatch()

  const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name] : value})
  }

  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
      if(!name || !city || !address || !capacity || !cost_per_day || !verified || !rating){
        setError("Please fill all the input field")
      } else {
        dispatch(addData(state))
        navigate("/")
        setError("")
      }
  }

  const [state, setState] = useState(
   {
    name: "",
    city: "",
    address: "",
    capacity: "",
    cost_per_day: "",
    verified: "",
    rating: ""
   }
  )

  const {name, city, address, capacity, cost_per_day, verified, rating} = state;

  return (
    <div>
    <h1>List Your Data Here</h1>
    {error && <h4 style={{color: "red"}}>{error}</h4>}
       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off" onSubmit={handleSubmit}
    >
      <TextField id="outlined" label="Name" variant="outlined" name="name" value={name} type="text" 
        onChange={handleInputChange}
      />
      <br />
      <TextField id="outlined" label="City" variant="outlined" name="city" value={city} type="text" onChange={handleInputChange}/>
      <br />
      <TextField id="outlined" label="Address" variant="outlined" name="address" value={address} type="text"  onChange={handleInputChange}/>
      <br />
      <TextField id="outlined" label="Capacity" variant="outlined" name="capacity" value={capacity} type="text"  onChange={handleInputChange}/>
      <br />
      <TextField id="outlined" label="Cost per day" variant="outlined" name="cost_per_day" value={cost_per_day} type="number"  onChange={handleInputChange}/>
      <br />
      <TextField id="outlined" label="Verified" variant="outlined" name="verified" value={verified} type="text"  onChange={handleInputChange}/>
      <br />
      <TextField id="outlined" label="Rating" variant="outlined" name="rating" value={rating} type="number"  onChange={handleInputChange}/>
      <br />
      

          <Button id='btn' type="submit" color='primary' variant="contained">Submit</Button>
      
    </Box>
    </div>
  )
}