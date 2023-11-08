import React from 'react'
import NavBar from '../navbar/NavBar'
import "./home.css"
import About from '../about/About'
import Menue from '../menue/Menue'
import { AiFillEnvironment, } from "react-icons/ai";
import { HiLibrary } from "react-icons/hi";





const Home = () => {
  return (
    <div>
   
    <NavBar /> 


    <div className="aa container-fluid" >
    <div className="background-image" style={{backgroundImage:"URL(images/home.png)"}}></div>
    <div className="bb">
      <h1>FRESH <span>FOOD IN THE</span> <br />  MORNING</h1>
      <p>Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit.<br />Placeat Labore, Sint Cupiditate Distinctio Tempora Reiciendis.</p>
      <button>Get Your Nows</button>
    </div>
  </div>

  <About />

  <Menue />
  

  <div className='branch-main'>
  <div className='branch'><h3>Branches</h3><h2>5 +</h2></div>
  <div className='branch'><h3>Branches</h3><h2>5 +</h2></div>
  <div className='branch'><h3>{<HiLibrary />}</h3><h2>5 +</h2></div>
  <div className='branch'><h3>{<AiFillEnvironment />}</h3><h2>5 +</h2></div>
  
  
  </div>


    </div>
  )
}

export default Home
