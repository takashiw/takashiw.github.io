import React, { Component } from 'react'
import '../ProjectView/style.css'
import './style.css'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

class DetailsMyopic extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div>
        <div className="header" style={{backgroundColor: "rgb(58, 147, 90)"}}>
          <Link to='/'>
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </Link>
          <h3>Sep 2017 • VR For Social Good @UF</h3>
          <h1>One Week to Learn VR and Build Empathy for Myopia</h1>
        </div>
        <div className="main">
          <p className="summary">A 2 minute Google Cardboard experience create to introduce the user to the problems of untreated vision problem in elementary school students, and impact that prescription glasses can have in the classroom.</p>
          <div className="lists">
            <h2>Components</h2>
            <ul>
              <li>Mattel ViewMaster VR</li>
              <li>Unity App</li>
            </ul>
            <h2>Personal Learning Areas</h2>
            <ul>
              <li>How To Unity (0 to 1)</li>
              <li>3D Modeling in Blender</li>
              <li>Game Development</li>
              <li>Iterative Design in Marston Library</li>
              <li>How to Record Spelling Words in Public</li>
            </ul>
          </div>

          <iframe src="https://www.youtube.com/embed/0PD2MFxU9hE" frameborder="0" allowfullscreen></iframe>
          <h2>I. The Mission</h2>
          <p>This project was created for Assignment 1 of the VR For Social Good class I am taking Senior Fall Semester at UF. The assignment is to "educate the user on a message to address a social good topic".</p>
          <p>The social good topic (cause vision democratization is always awesome to develop for) I chose was providing kids in elementary school with glasses. The non-profit I based this project on is Vision to Learn, a LA-based non-profit who provide "free eye exams and free eyeglasses to students in low income neighborhoods".</p>

          <h2>II. The Simulation</h2>
          <p>The VR experience takes you through the following</p>
          <ol>
            <li>A presentation of the problem space (scarcity of eyeglasses for kids)</li>
            <li>Simulation of first grade spelling lesson where you look at the board and spell along </li>
            <li>Same Simulation, but this time with 20/200 vision </li>
            <li>Your attention results and other facts</li>
          </ol>
          <img src={process.env.PUBLIC_URL + '/images/projects/myopia/package.png'} />
          <p className="subtitle">1.5 million first graders need glasses, but only 5% get them</p>

          <img src={process.env.PUBLIC_URL + '/images/projects/myopia/classroomScreen.png'} />
          <p className="subtitle">Classroom setting with red raycast to track users attention span</p>

          <img src={process.env.PUBLIC_URL + '/images/projects/myopia/resultsScreen.png'} />
          <p className="subtitle">Results lobby with rotating trophies with detailed benefits</p>

          <h2>III. Models</h2>
          <p>With one week to develop, I needed symbols models that could still convey messages and aid wiith immersion. But I had not done 3D modeling since my 
            time in high school working from my bootlegged version of Cinema 4D. So, I capitalized on a low poly style. 
            <br/>Not only was it perfect for a crunch in development time, but, with a bright color palette, the style was playful, 
            paralleling with the subject matter of elementary schoolers. All of the models were created by myself in Blender!</p>
          <video className="model" preload="true" autoplay="true" loop>
            <source src={process.env.PUBLIC_URL + '/images/projects/myopia/School-Desk.mp4'} type="video/mp4" />
          </video>
          <video className="model" preload="true" autoplay="true" loop>
            <source src={process.env.PUBLIC_URL + '/images/projects/myopia/Glasses.mp4'} type="video/mp4" />
          </video>
          <p className="subtitle">School Desk and Glasses Models</p>

          {/* <h2>IV. Sketches</h2> */}
          {/* <img src={process.env.PUBLIC_URL + '/images/projects/myopia/sketches.jpg'} /> */}

        </div>
      </div>
    )
  }
}

export default DetailsMyopic
