//Settings
import React, { useEffect, useState } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import { Button } from 'bootstrap'
import { ToastContainer, toast } from 'react-toastify';



function Home() {

  useEffect(() => {
      toast.success("You are logged in")
    },[])
  

  return (
    <div>
      <h1 className='home'>This is Home page</h1>
      <ToastContainer/>
      
      <Link to={"/"} >
      <button >login</button>
      </Link>
    </div>
  )
}

export default Home