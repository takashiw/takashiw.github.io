import React, { Component } from 'react'
import '../ProjectView/style.css'
import './style.css'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

class DetailsARPokemon extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div>
        <div className="header" style={{backgroundColor: "#f49028"}}>
          <Link to='/'>
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </Link>
          <h3 className="date" style={{color: "#f49028"}}>Spring 2018</h3>
          <h1>Two Player Augmented Reality Pokemon Battles</h1>
          <h3>CIS4914 Senior Project @UF • Animation / Interaction Design</h3>
        </div>
        <div className="main">
          <p className="summary">For our Senior Project, our team of five Computer Science students at UF went off of one of our friend's ideas: what if you could battle Pokemon in a shared AR space?
          Our semester was dedicated to making this idea a reality. For my role, I animated the "monsters" (I started with no 3D animation experience) and designing the interface and interactions throughout the application.</p>
          <div className="lists">
            <h2>Experience Gained In:</h2>
            <ul>
              <li>Blender3D</li>
              <li>iOS Frontend Development</li>
              <li>Unity Frontend Development</li>
            </ul>
            <h2>Personal Contribution</h2>
            <ul>
              <li>3D Rigging and Animation</li>
              <li>Importing Models into SceneKit and Unity</li>
              <li>Interaction Design</li>
              <li>User Interface Design</li>
            </ul>
          </div>
          
          {/* <img className="hero" src={process.env.PUBLIC_URL + '/images/pars/HCTC-SealLone.png'} /> */}

        <iframe className="youtube" src="https://www.youtube.com/embed/eOujgbU94lQ" frameborder="0" allowfullscreen></iframe>
        
        <h2>Interface Design</h2>
          <p>With Mobile AR, there has been limited guidelines or best practices established. Therefore, I was excited to explore this new user interface realm with far-out experimentation.</p>
          <p>One of the most impressive interface discoveries was the Proximity Calibration Screen. The multiplayer AR session must begin at the same point in space, which each device will be able to use as a reference point for their worlds. 
            Rather than simply asking the users to place their phone on top of one another, I created the idea of completing an animation.<br/>
            Each user has the other half of an animation (a spinning Pokeball), and the user's place them next to each other. It allows for an entertaining screen in a functional step of the calibration.
          </p>
          <img src={process.env.PUBLIC_URL + '/images/ARPokemon/CalibrationScreen.png'} />
          <p className="subtitle">Training Screen - Sketch Mockup 💎</p>
          <p>For the battle interface, I wanted to combine the two functionalities of mobile device: use as a viewfinder and use as a remote.<br/>
          In order to have the remote controller interface without removing the user from the immersion of the viewfinder, I looked to mobile GPS Navigation interfaces. The analogy is that with GPS navigation, the user must perform input while being minimally distracted from the road.
          I replicated the element of a tray of buttons which were invoked with swipe gestures. The buttons were made to be large with heavy outlines to allow for rapid, eventually habitual input, and to pay homage to the style of GameFreak's Pokemon games.
          </p>
          <img className="halfImage"  src={process.env.PUBLIC_URL + '/images/ARPokemon/BattleInterface-Notch.png'} />
          <img className="halfImage" src={process.env.PUBLIC_URL + '/images/ARPokemon/BattleInterface-Collapsed.png'} />
          <p className="subtitle">Training Screen - Sketch Mockup 💎</p>
          <p>With the eventual integration of voice, the sliding tray would also allow for the user to call commands to their Pokemon. This would allow for the most immersive gameplay, as they would never have to invoke the tray, reducing obsruction of the viewfinder.
          </p>
        <h2>Animation</h2>
        <p>My experience level with 3D animation was limited to some short films I did in high school, but this was never rigged character animation.
          With the first couple of weeks, I experimented with motion capture, using a Kinect 360. 
        </p>
        <iframe src="https://drive.google.com/file/d/1ZXJnacHFQsVAFfl_H2giUwlnD6p-c9pQ/preview" width="640" height="480"></iframe>
        <p>Kinect's tracking worked well if the subject is standing still, so idle poses were good. But motion capture limited the animation to just stances. Any falling over or jumping would be limited. 
          In addition, the scaling down of motion capture skeleton from human to Pokemon created issues. Even for an anthropomorphic character like Machop, the scaling caused feet sliding and was not a compelling animation.
        </p>
        <iframe src="https://drive.google.com/file/d/1_u-Gnzs7ITpqVLeHXTLu_VVhD5ubAToz/preview" width="640" height="480"></iframe>
        <p className="subtitle">Machop with MoCap Data from CMU; Lookin' like a Baywatch star</p>

        <p>So, I decided to accept the challenge of rigging and animating the Pokemon. </p>
        <iframe src="https://drive.google.com/file/d/1ik_HrIpKzcuM37N7-nO9RBdqw0TGF-r5/preview" width="640" height="480"></iframe>
        <p className="subtitle">Rigging Squirtle</p>

        <iframe src="https://drive.google.com/file/d/1nRPNCcj1xWT6pzlOEdJqYJRRAFxX0VzO/preview" width="640" height="480"></iframe>
        <p className="subtitle">Animating Squirtle - Hit Action 💥</p>

        <video preload="true" autoplay="true" loop>
          <source src={process.env.PUBLIC_URL + '/images/ARPokemon/SquirtleHit.mp4'} type="video/mp4" />
        </video>
        
        <h2>Final Report: Importing Animations + More</h2>
        <p>For more information on importing animations and more interface design, you can check out the full final report below:</p>
        <iframe src="https://drive.google.com/file/d/1OkKWM_eBCpvT7BwzckffiQiEpFwJwHa9/preview" width="640" height="480"></iframe>
        </div>
      </div>
    )
  }
}

export default DetailsARPokemon
