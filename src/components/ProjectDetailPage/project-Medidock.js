import React, { Component } from 'react'
import '../ProjectView/style.css'
import './style.css'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

class ProjectMedidock extends Component {

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div>
        <div className="header" style={{backgroundColor: "rgb(136, 190, 255)"}}>
          <Link to='/'>
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </Link>
          <h3>Oct 2016 • Hackathon Build</h3>
          <h1>Prototyping a Hands-Off Prescription Tracker designed for Inclusivity</h1>
        </div>
        <div className="main">
          <p className="summary">Allowing for simple and seamless prescription medication dosage tracking, MediDock is an independently functioning iOS app with an accessory prescription dock, capable of tracking user dosage</p>
          <div className="lists">
            <h2>Components</h2>
            <ul>
              <li>iOS Application</li>
              <li>Prescription Bottle Dock</li>
            </ul>
            <h2>Personal Learning Areas</h2>
            <ul>
              <li>Product Design</li>
              <li>iOS Development</li>
              <li>Medication Privacy Laws (HIPAA)</li>
              <li>Views of Detroit Skylines</li>
            </ul>
          </div>
          <img className="hero" src={process.env.PUBLIC_URL + '/images/projects/medidock/medidock-portfolio_header-drawn.png'} />
          <h2>Prescription Bottle Dock</h2>
          <p>The entire idea stemmed from a prescription bottle dock. For the design, the dock had to
              <br/>- require minimal user interaction
              <br/>- un-itrusively work in the user&apos;s current routine
              <br/>- track dosage
          </p>
          <h3>Components</h3>
          <ul>
            <li>Housing </li>
            <li>Weight Scale or Pressure Sensor </li>
            <li>Bottle-to-Sensor Stand </li>
            <li>Particle Photon </li>
          </ul>
          <img src={process.env.PUBLIC_URL + '/images/projects/medidock/medidock-portfolio_hardware.png'} />
          <p className="subtitle">Hardware Components : Top View & Side View</p>
          <h3>Tracking</h3>
          <p>The tracking of dosage was designed with two different implementations, using a weight scale and using a pressure sensor. The later was implemented due to limitations in access to hardware.</p>
          <img src={process.env.PUBLIC_URL + '/images/projects/medidock/pill-view.png'} />
          <p className="subtitle">Dock : Side View and X-Ray View</p>
          <h3>Scale Implementation</h3>
          <p>With the scale implementation, the prescription bottle&apos;s weight can be measured, and using medical information and input for bottle type, we can calculate the exact number of pills left.</p>
          <h3>Pressure Sensor Implementation</h3>
          <p>With the pressure sensor implementation, dosage is tracked every time that the pressure sensor is alleviated for an extended period of time (10-40 seconds)</p>
          <hr/>
          <h2>iOS Application</h2>
          <p>Adopting Inclusive Design, we focused on the user base that would have the most difficulty: the more elderly demographic. Therefore, we focused on:</p>
          <ul>
            <li>Accessibility</li>
            <li>Legality </li>
            <li>Unitrusivity</li>
          </ul>
          <h3>Legality</h3>
          <p>We had to ensure that the application would fit with the HIPAA privacy laws for prescription medication. We had to ensure that features did not disclose information, and the user could have full comfort with using our application. </p>

          <p>Therefore, we had to remove features such as push notifications, doctor input, and storing in databases, as this will invades privacy by sharing dosage and prescription information.</p>

          <h3>App Flow</h3>
          <p>The application was made to be centralized through the list view, and have minimal paths from that center point. The workflow is modulated with two paths to ensure that the user could not get lost, and modal transitions were appropriately chosen for direction.</p>

          <img src={process.env.PUBLIC_URL + '/images/projects/medidock/medidock-portfolio_workflow.png'} />
          <p className="subtitle">the application workflow</p>

          <h3>Final Screens</h3>
          <div className="appScreens">
            <img className="halfImage" style={{marginLeft: "50%", transform: "translateX(-50%)"}} src={process.env.PUBLIC_URL + '/images/projects/medidock/screen1.PNG'} />
            <p className="subtitle">Scr. 1 - Disclaimer</p>
            <img className="halfImage" src={process.env.PUBLIC_URL + '/images/projects/medidock/screen2.PNG'} />
            <img className="halfImage" src={process.env.PUBLIC_URL + '/images/projects/medidock/screen3.PNG'} />
            <p className="subtitle">Scr. 2 - List View (left) ; Scr. 3 - Details View (right)</p>
            <img className="halfImage" src={process.env.PUBLIC_URL + '/images/projects/medidock/screen5.PNG'} />
            <img className="halfImage" src={process.env.PUBLIC_URL + '/images/projects/medidock/screen6.PNG'} />
            <p className="subtitle">Scr. 4 - Dosage View (changes based on color, shape, and amount)</p>
            <img className="halfImage" style={{marginLeft: "50%", transform: "translateX(-50%)"}} src={process.env.PUBLIC_URL + '/images/projects/medidock/screen7.PNG'} />
            <p className="subtitle">Scr. 5 - Add Prescription View</p>
            <img className="halfImage" src={process.env.PUBLIC_URL + '/images/projects/medidock/screen8.PNG'} />
            <img className="halfImage" src={process.env.PUBLIC_URL + '/images/projects/medidock/screen9.PNG'} />
            <p className="subtitle">Scr. 6 - Medication List View (left) ; Scr. 7 - Frequency Detail View (right)</p>

          </div>
        </div>
      </div>
    )
  }
}

export default ProjectMedidock
