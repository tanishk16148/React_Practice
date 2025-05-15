import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
// import { DarkModeSwitch } from 'react-toggle-dark-mode';


function Dashboard() {

    const[name, setName] = useState(localStorage.getItem("Value"))

    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
    }   /// Dark Mode

    useEffect(() =>{
        toast.success("Welcome..!!"+" "+ name)
    })
    // toast.configure({
    //   autoClose: 8000,
    //   draggable: false,
    // });

  return (
    <div>
        <h1>Dashboard</h1>
        <ToastContainer/>
        {/* dark mode */}
            <div className={isDarkMode ? "wraper" : "wraper2"}>
            {/* <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={120}
            /> */}
            </div>
    </div>
    
  )
}

export default Dashboard