import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

function Dashboard() {

    const[name, setName] = useState(localStorage.getItem("Value"))

    useEffect(() =>{
        toast.success("Welcome..!!"+" "+ name)
    })

  return (
    <div>
        <h1>Dashboard</h1>
        <ToastContainer/>
    </div>
    
  )
}

export default Dashboard