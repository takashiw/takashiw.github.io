import React, { Component } from 'react'
import '../ProjectView/style.css'
import './style.css'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

class DetailsSwipemoji extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div>
        <div className="header" style={{backgroundColor: "rgb(42, 144, 255)"}}>
          <Link to='/'>
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </Link>
          <h3>Coming Dec 2017 • Natural User Interaction @UF</h3>
          <h1>Gesture Recognition as a Keyboard with Swipemoji</h1>
        </div>
        <div className="main">
          <p className="summary">Swipemoji is an iOS keyboard that takes gesture recognition to search emojis. Started as a group project in UF’s Natural User Interaction course, the project has been continued in development to create a published iOS application.</p>
          <div className="lists">
            <h2>Experience Gained In:</h2>
            <ul>
              <li>iOS Development</li>
              <li>$P Recognizer from University of Washington</li>
              <li>On-boarding Animation</li>
              <li>Lottie + Bodymovin</li>
            </ul>
          </div>

          <h2>Releasing to App Store</h2>
          <p>Development is currently in progress, with deployment scheduled for December 2017.</p>
          <p>If you would like to check out our progress, you check <a href="https://github.com/Swipemoji" target="_blank">here on GitHub.</a></p>

          <h2>Preview of what's to Come</h2>

          <img src={process.env.PUBLIC_URL + '/images/swipemoji/dribbble-logo.gif'} />
          <p className="subtitle">Swipemoji Logo Animation</p>

          <img src={process.env.PUBLIC_URL + '/images/swipemoji/FloatingHand.gif'} />
          <p className="subtitle">Animation for on-boarding</p>

          <img src={process.env.PUBLIC_URL + '/images/swipemoji/JumpPreview.gif'} />
          <p className="subtitle">Gesture to Emoji Jump Animation</p>


        </div>
      </div>
    )
  }
}

export default DetailsSwipemoji
