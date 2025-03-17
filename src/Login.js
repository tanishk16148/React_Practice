import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Common/Header'
import Footer from './Common/Footer'
import { ToastContainer, toast } from 'react-toastify';

function Login() {

  const [data, setData]= useState(10)
  const handleIncrement =()=>{
    setData(data+1)
    toast.success("You have Added 1")
  }
  const handleDecrement =()=>{
    setData(data-1)
    toast.error("You have removed 1")

  }

  useEffect(() => {
      toast.error("You are logged out")
    },[])



  const[number  , setNumber] = useState(100)
  const[name , setName] = useState('')

  const handleSubmit = () =>{
    console.log(name);
    
  }


  return (
    <div>
        <Header/>
        <ToastContainer/>
        <button onClick={handleIncrement}>+</button>
        <h2>{data}</h2>
        <button onClick={handleDecrement}>-</button>

        <h2>{name}</h2>

        <h1>The login</h1>

        <Link to={"/home"}>
        <button>Login</button>
        </Link>

        <h1>{number}</h1>
      <label>UserName :</label>
      <input 
      type='text'
      value={name}
      onChange={(e) =>setName(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
        <Footer/>

    </div>
    
  )
}

export default Login


// import React, { useState } from 'react'

// function Login() {


//    const[data , setData] = useState("")

//    const[number , setNumber] = useState(0)
   
//    const handleSubmit = () =>{
//      sessionStorage.setItem("name",data)
    
//    }

//    const handleIncrement = () =>{
//       setNumber(number + 1)
//    }

//    const handleDecrement = () =>{
//     setNumber(number - 1)
//  }
  
    

//   return (
//     <div>
//        <input
//         type='text'
//         value={data}
//         onChange={(e) => setData(e.target.value)}
//         />

//         <button onClick={handleSubmit}>Submit</button>


//         <div>
//           <button onClick={handleIncrement}>+</button>
//           <h1>{number}</h1>
//           <button onClick={handleDecrement}>-</button>
//         </div>
//     </div>
//   )
// }

// export default Login  