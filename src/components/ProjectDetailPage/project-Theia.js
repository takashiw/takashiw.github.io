import React, { Component } from 'react'
import '../ProjectView/style.css'
import './style.css'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

class Theia extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div>
        <div className="header" style={{backgroundColor: "#FFC96A"}}>
          <Link to='/'>
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </Link>
          <h3>Oct 2016 • Hackathon Build</h3>
          <h1>Prototyping Accessible, New Eye Exams</h1>
        </div>
        <div className="main">
          <p className="summary">To provide eye prescription exams to the third-world, Theia is a low-cost, full eye examination kit. All you need is a mobile phone, cardboard, scissors, and a pair of eyes.</p>
          <div className="lists">
            <h2>Components</h2>
            <ul>
              <li>Cardboard Housing Kit</li>
              <li>iOS Application</li>
            </ul>
            <h2>Personal Learning Areas</h2>
            <ul>
              <li>Product Design</li>
              <li>iOS Development</li>
              <li>Optometry</li>
              <li>Philly Cheese Steaks</li>
            </ul>
          </div>
          <img className="hero" src={process.env.PUBLIC_URL + '/images/projects/theia/hero.png'} />
          <h2>Cardboard Kit</h2>
          <p>In the design, we wanted to ensure that any hardware required by the piece would not have to be bought by or sent to the user. So, why not have them build the kit themselves?</p>
          <p>Outside of cost, the kit needed
              <br/>- hold the phone 20 inches from the user’s face
              <br/>- shield external light from causing viewing difficulty
              <br/>- be easily made with minimal time and materials
              <br/>- reusable for a community
              <br/>But with these factors, we wanted to still strive for high accuracy, so we had to do the research.
          </p>
          <img src={process.env.PUBLIC_URL + '/images/projects/theia/kit.png'} />
          <p className="subtitle">Kit - Instruction Template (Colored)</p>
          <img src={process.env.PUBLIC_URL + '/images/projects/theia/instruction.png'} />
          <p className="subtitle">Kit - Instruction Template (Colored)</p>
          <img className="halfImage" src={process.env.PUBLIC_URL + '/images/projects/theia/Loading.gif'} />
          <img className="halfImage" src={process.env.PUBLIC_URL + '/images/projects/theia/Housing-Animation.gif'} />
          <p className="subtitle">Kit - Animated (left: Rotation , right: Housing)</p>
          <img src={process.env.PUBLIC_URL + '/images/projects/theia/theia-stage.png'} />
          <p className="subtitle">Kit - Hackathon Demo Version</p>
          <hr/>
          <h2>iOS Application</h2>
          <p>As the target area was third world countries, we had these factors to consider:</p>
          <ul>
            <li>Ease of Use</li>
            <li>Limited Internet Access</li>
            <li>International Languages</li>
          </ul>
          <p>But with these factors, we wanted to still strive for high accuracy, so we had to do the research.</p>
          <h2>Making an Actual Eye Exam</h2>
          <p>As opposed to many other mobile eye exams, which mainly focus on diagnosing cataracts and symptoms of blindness, we were more concerned with myopia and astigmatism—commonplace eye ailments which prescription lens help with.<br/>
             So with six hours of research in optometry and prescription eye exams, we invented a test that worked on a mobile screen, requiring only 20 inches of space from the phone screen to the eyes.</p>
          <img src={process.env.PUBLIC_URL + '/images/projects/theia/theia-scaling.png'} />
          <p className="subtitle">Scaling from Snellen to Screen | Exam Algortihm</p>
          <p>In addition, we decided to use the Landolt test rather than the common Snellen chart. This allows for the test to work on an international scale.</p>
          <img src={process.env.PUBLIC_URL + '/images/projects/theia/theia-portfolio_charts.png'} />
          <p className="subtitle">left: Snellen ; right: Landolt</p>
          <h2>App Flow</h2>
          <p>We wanted the application to be a simple path from start to finish. No additional bells and whistles. The use case which convinced this was a community center with a single kit that could be easily passed around from person to person with ease. Therefore, we utilized a uni-directional application flow</p>
          <img src={process.env.PUBLIC_URL + '/images/projects/theia/theia-portfolio_workflow.png'} />
          <p className="subtitle">the application workflow</p>
          <h2>Final Screens</h2>
          <div className="appScreens">
            <img className="halfImage" src={process.env.PUBLIC_URL + '/images/projects/theia/theia-portfolio_app-1.png'} />
            <img className="halfImage" src={process.env.PUBLIC_URL + '/images/projects/theia/theia-portfolio_app-2.png'} />
            <p className="subtitle">Scr. 1 - Splash (left) ; Scr. 2 - Eligibility (right)</p>
            <img src={process.env.PUBLIC_URL + '/images/projects/theia/theia-portfolio_app-3.png'} />
            <p className="subtitle">Scr. 3 - Insert Housing Instr.</p>
            <img src={process.env.PUBLIC_URL + '/images/projects/theia/theia-portfolio_app-4.png'} />
            <p className="subtitle">Scr. 4 - Exam Explanation</p>
            <img src={process.env.PUBLIC_URL + '/images/projects/theia/theia-portfolio_app-5.png'} />
            <p className="subtitle">Scr. 4 - Eye Housing Instr.</p>
            <img src={process.env.PUBLIC_URL + '/images/projects/theia/theia-portfolio_app-6.png'} />
            <p className="subtitle">Scr. 5 - Eye Exam</p>
            <img src={process.env.PUBLIC_URL + '/images/projects/theia/theia-portfolio_app-7.png'} />
            <p className="subtitle">Scr. 6 - Exam Result</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Theia
