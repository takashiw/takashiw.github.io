import React, { Component } from 'react'
import '../ProjectView/style.css'
import './style.css'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

class DetailsPARS extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div>
        <div className="header" style={{backgroundColor: "#00529b"}}>
          <Link to='/'>
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </Link>
          <h3>Human-Centered Technology in Construction @UF • Research Assistant / Developer</h3>
          <h1>Training Construction Workers using 360 images</h1>
        </div>
        <div className="main">
          <p className="summary">For the last semester of my time at the University of Florida, I worked as a Research Assistant at the HCTC Lab under the Rinker School of Construction Management. I was tasked with developing a final version of a prototype the research team had created. 
          PARS is a software which uses 360 images to test the viability of training construction works on safety using 360 photos (similar to Google street view). Test users would go through training, then assessment session. Certain telemetry had to be recorded, such as interaction time with certain hazards and hotspots. The application is curently being used in research and will be released alongside a paper on the findings.</p>
          <div className="lists">
            <h2>Experience Gained In:</h2>
            <ul>
              <li>Unity Development</li>
              <li>Design Patterns in C#</li>
              <li>Sketch Interface Design</li>
              <li>Design Systems</li>
            </ul>
            <h2>Personal Contribution</h2>
            <ul>
              <li>Full Stack Development in Unity C#</li>
              <li>Interface & Interaction Design</li>
            </ul>
          </div>
          <img className="hero" src={process.env.PUBLIC_URL + '/images/pars/HCTC-SealLone.png'} />


        <video controls autoPlay loop>
          <source src={process.env.PUBLIC_URL + '/images/pars/PARSDemo720.mp4'} type="video/mp4" />
        </video>
        <p className="subtitle">Full demo for PARS from April 2018</p>
        
        <h2>Interface Mockups</h2>
          <p>Working with the Research team at HCTC, I iterated from their initial interface for the PARS prototype and combined the <a href="http://identity.ufl.edu/our-brand/" target="_blank">visual design guidelines for the University of Florida</a>, adapting it for interface design.</p>
          <img src={process.env.PUBLIC_URL + '/images/pars/Training_Selected.png'} />
          <p className="subtitle">Training Screen - Sketch Mockup 💎</p>
          <img src={process.env.PUBLIC_URL + '/images/pars/Assessment_v2.png'} />
          <p className="subtitle">Assessment Screen - Sketch Mockup 💎</p>
          <img src={process.env.PUBLIC_URL + '/images/pars/FeedbackScreen.png'} />
          <p className="subtitle">Assessment Results Screen - Sketch Mockup 💎</p>

        <h2>Final Thoughts</h2>
        <p>Working as an assistant, I developed in two week sprints. With the frequent meetings and the small size of our team, I had the awesome opportunity to work closely with great people in a field I would have never had experience in otherwise.
          Working on a construction-focused project had me asking many questions and looking for lots of feedback on design, learning to be more oriented on other people's requirements rather than my own visual styles.
          It was an incredible opportunity, and I am grateful that it was a large part of my final semester in college.
        </p>
        <p>As a parting gift for the lab, I created this logo for the HCTC Lab, combining all the elements of the teams mission. For more info, check it out here on Dribbble.
        </p>
        <img src={process.env.PUBLIC_URL + '/images/pars/HCTC-LogosBold@2x.png'} />
          <p className="subtitle">New HCTC Brand</p>

        </div>
      </div>
    )
  }
}

export default DetailsPARS
