//Home
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function Helppingtool() {

  const[data , setData] =useState(true)

  const handleSubmit = () =>{
    setData(!data)
    toast.success("You are logged in")
  }

  useEffect(() => {
    // toast.success("You are logged in")
  },[])

  return (
    <div>
      <ToastContainer/>
      <input type='checkbox' onClick={handleSubmit}></input>
      {data ? "You are logged in" : "You are not logged in"}  
      {/* <button onClick={handleSubmit}>Submit</button> */}
    </div>
  )
}

export default Helppingtool