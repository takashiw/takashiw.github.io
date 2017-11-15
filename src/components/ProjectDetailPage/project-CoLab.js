import React, { Component } from 'react'
import '../ProjectView/style.css'
import './style.css'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

class DetailsCoLab extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div>
        <div className="header" style={{backgroundColor: "rgb(34, 34, 34)"}}>
          <Link to='/'>
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </Link>
          <h3>Winter & Summer 2017 • CoLab Fellowship</h3>
          <h1>Prototyping with IDEO CoLab</h1>
        </div>
        <div className="main">
          <p className="summary">For two weeks in January and nine weeks in the summer of 2017, I took part in IDEO CoLab’s fellow in Cambridge and San Francisco. Alongside partner companies, we explored applications of new technologies like IoT and AI in the many fields from energy price markets to home security to transportation.</p>
          <div className="lists">
            <h2>Technologies Used:</h2>
            <ul>
              <li>Google Assistant / Google Home</li>
              <li>iOS Development</li>
              <li>ReactJS</li>
              <li>Cardboard Fabrication</li>
              <li>Little Bits & Hacking Circuitry</li>
            </ul>
          </div>

          <h2>The Experience</h2>
          <p>Working in extreme rapid sprints spanning from 2 days to 7 weeks, I worked in interdisciplinary teams of 3-4. My teammates spanned from industrial and graphic designers, undergraduate students, MBAs, to even a rap producer. And my role in each project was just as multifaceted. I built brands and story telling animations as a graphic designer, prototyped in iOS and ReactJS as a software developer, and build cardboard prototypes as an industrial designer. Whatever the project demanded, our team ebbed and flowed as we navigated ambiguity.</p>

          <h2>The Work</h2>

          <p>The prototypes we created we focused on proving feasibility (testing AI in Tensor Flow and iOS apps for IoT) , observing desirability (cardboard form factors used during user interviews), and even determining market viability (mathematic simulations to test new world market designs)</p>

          <img src={process.env.PUBLIC_URL + '/images/colab/GroupShot.png'} />
          <p className="subtitle">Cardboard prototypes created for user testing (the magic of hot glue and LittleBits)</p>

          <img src={process.env.PUBLIC_URL + '/images/colab/Bernie.gif'} />
          <p className="subtitle">Animated prototype for a IoT sensor in dog form</p>

          <img src={process.env.PUBLIC_URL + '/images/colab/kevin.jpeg'} />
          <p className="subtitle">2 day prototype for security system demo</p>

          <img src={process.env.PUBLIC_URL + '/images/colab/kevin-unwrapped.jpeg'} />
          <p className="subtitle">Inner mechanisms of IoT doormat</p>

          <img src={process.env.PUBLIC_URL + '/images/colab/parker.png'} />
          <p className="subtitle">More cardboard in 3 day sprint with room air quality tracker</p>

          <img src={process.env.PUBLIC_URL + '/images/colab/tobi.png'} />
          <p className="subtitle">Changing the form factor of Google Home for user testing</p>

          <img src={process.env.PUBLIC_URL + '/images/colab/oscar.gif'} />
          <p className="subtitle">The little guy that started it all: an IoT trash weight to encourage recycling</p>
        </div>
      </div>
    )
  }
}

export default DetailsCoLab
