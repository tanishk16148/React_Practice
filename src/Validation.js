import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "./image/IMG-2332554.jpg";
import img2 from "./image/IMG-2332556.jpg";
import img3 from "./image/IMG-2332557.jpg";
import img4 from "./image/IMG-2332560.jpg";
import img5 from "./image/IMG-2332561.jpg";
import img6 from "./image/IMG-2332562.jpg";


import "./Validation.css"

function Validation() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [data, setData] = useState('') 
    const [pass, setPass] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(data ===''){
            alert('Please enter your name')
        }else if(pass ===''){
            alert('Please enter your pass')            
        }else{
            alert("Hello"+" "+data)
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <lable>UserName: </lable>
        <input 
        type="text" 
        value={data}
        onChange={(e) => setData(e.target.value)}/>

        <lable>Password: </lable>
        <input 
        type="text" 
        value={pass}
        onChange={(e) => setPass(e.target.value)}/>

        <button type='submit'>Login</button>
        </form>
        <Slider {...settings}>
      <div>
        <img className='sleepy' src={img1}></img>
      </div>
      <div>
      <img className='sleepy' src={img2}></img>
      </div>
      <div>
      <img className='sleepy' src={img3}></img>
      </div>
      <div>
      <img className='sleepy' src={img4}></img>
      </div>
      <div>
      <img className='sleepy' src={img5}></img>
      </div>
      <div>
      <img className='sleepy' src={img6}></img>
      </div>
    </Slider>
    </div>
  )
}

export default Validation