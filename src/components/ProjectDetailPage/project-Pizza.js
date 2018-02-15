import React, { Component } from 'react'
import '../ProjectView/style.css'
import './style.css'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

class ProjectPizza extends Component {

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div>
        <div className="header" style={{backgroundColor: "rgb(52,142,67)"}}>
          <Link to='/'>
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </Link>
          <h3>Feb 2018 • Sticker Mule Dribbble Playoff</h3>
          <h1>Animating a Pizza & Winning an Oven</h1>
        </div>
        <div className="main">
          <p className="summary">Alongside 287 designers on the website <a href="https://dribbble.com/takashiw" targer="_blank">Dribbble</a>, I created a sticker design for  <a href="https://dribbble.com/shots/4169697-Vinny-s-Pizza-Playoff" targer="_blank">Sticker Mule's contest</a> to see who can draw the most impressive pizza to catch the eye of Sticker Mule's new Director of Hospitality, Vinny.
          <br/>And much to my excitement, Vinny chose my design as the grand prize winner 🍕🥊 </p>
          <a href="https://dribbble.com/shots/4189976-Tough-Little-Pizza-Box" target="_blank"><img src={process.env.PUBLIC_URL + '/images/projects/pizza/PizzaMe.gif'} /></a>
          <p className="subtitle">"Look at this Tough Little Pizza Box"</p>

          <p>The morning of February 14, 2018, Sticker Mule uploaded this incredible video. Watch to see Vinny pull my pizza fresh out the oven!</p>
          <iframe src="https://www.youtube.com/embed/S-Jpu4yJtOA?rel=0" frameborder="0" allowfullscreen></iframe>

          <h3>Sketches & Iterations</h3>
          <img className="centered" src={process.env.PUBLIC_URL + '/images/projects/pizza/sketch.JPG'} />
          <img src={process.env.PUBLIC_URL + '/images/projects/pizza/Pizza-Iterations.png'} />
          <img src={process.env.PUBLIC_URL + '/images/projects/pizza/Box-Iterations.png'} />

          <p className="subtitle">Check out the final version on <a href="https://dribbble.com/shots/4189976-Tough-Little-Pizza-Box" target="_blank">Dribbble</a>!</p>

        </div>
      </div>
    )
  }
}

export default ProjectPizza
