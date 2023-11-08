import React from 'react'
import "./about.css"
const About = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center", padding: 30, fontWeight: "bold" }}> <span style={{ color: "#ffc107" }}>ABOUT</span> US</h1>


            <div className='about container d-flex'>

                <div className='col-md-6' style={{ backgroundImage: "url(images/about.png)",backgroundRepeat:"no-repeat" }}></div>
                <div className='about-text col-md-6'>
                    <h2>What Makes Our Food Special?</h2>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Voluptatibus Qui Ea Ullam, Enim Tempora Ipsum Fuga Alias Quae Ratione A Officiis Id Temporibus Autem? Quod Nemo Facilis Cupiditate. Ex, Vel?
                        Lorem Odit Amet Enim Quod Veritatis
                        <br></br><br></br> Voluptatibus Qui Ea Ullam, Enim Tempora Ipsum Fuga Alias Quae Ratione A Officiis Id Temporibus Autem? Quod Nemo Facilis Cupiditate. Ex, Vel?
                        Lorem Ipsum Odit Amet Enim Quod Veritatis</p>

                    <button>Learn More</button>
                </div>

            </div>


            
        </div>
    )
}

export default About
