import React, { useState } from 'react'

function Register() {

    const [data, setData] = useState('') 

    const handleSubmit = () =>{
        localStorage.setItem("Value",data) 
        
        setTimeout(() =>{
          window.location.href = "/dash"
        })
      }

  return (
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d697.0320306590822!2d80.21751597148629!3d13.08809619574546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52655307552a1b%3A0x73eb324716c9edb5!2sGreens%20Technologies!5e1!3m2!1sen!2sin!4v1741871916231!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/0QdyAj6tcsU?si=v9pT1Sf7YhAOgHVZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <label>UserName : </label>
        <input type='text' placeholder='Typee.....' value={data} onChange={(e)=> setData(e.target.value)}/>
        <button onClick={handleSubmit}>Login</button>

    </div>
  )
}

export default Register