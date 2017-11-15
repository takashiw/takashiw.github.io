import React, { Component } from 'react'
import '../ProjectView/style.css'
import './style.css'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

class ProjectMango extends Component {

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div>
        <div className="header" style={{backgroundColor: "rgb(134, 227, 242)"}}>
          <Link to='/'>
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </Link>
          <h3>Oct 2016 • Design Practice</h3>
          <h1>Redesigning MangoHealth iOS App for Accessibility</h1>
        </div>
        <div className="main">
          <p className="summary">As an application for the KPCB Design Fellowship, the bonus question was to redesign an app of a KPCB portfolio. My choice: Mango Health.
          As one of my first attempts at redesigning someone else&apos;s work, I focused on incusive design, making the app simple and accessible to an elderly demographic.</p>
          <div className="lists">
            <h2>Areas of Redesign</h2>
            <ol style={{listStyleType: "upper-roman"}}>
              <li>Home Screen</li>
              <li>Workflow</li>
              <li>Adding Prescription</li>
            </ol>
            <h2>Live Demo</h2>
              <a href="https://marvelapp.com/29c9706/screen/24350440"><p>Play with it here on Marvel</p></a>
          </div>
          <img className="hero" src={process.env.PUBLIC_URL + '/images/projects/mango/hero.png'} />
          <h2>I. Home Screen Redesign</h2>
          <p>The current homescreen for Mango Health is used as a hub for accessing different parts of the application, providing consolidated previews for each main section of the app.</p>
          <p>With the redesign, the homescreen is built around the main action (inputting dosage) required by the user in order for the other sections to serve actual value.</p>
          <img className="halfImage" src={process.env.PUBLIC_URL + '/images/projects/mango/home.png'} />
          <img className="halfImage" src={process.env.PUBLIC_URL + '/images/projects/mango/old-home.png'} />
          <p className="subtitle">Redesign (left) ; Current (right)</p>

          <h3>Objective</h3>
          <ul>
            <li>Encourage habitual user input for greater user retention</li>
          </ul>
          <h3>Solutions</h3>
          <ol>
            <li>Prominent and quicker user input (dosage)</li>
            <li>Visual correlation between points and input</li>
            <li>List of soon upcoming doses</li>
          </ol>

          <h2>1. User Input</h2>
          <p>With the current homescreen&apos;s purpose as a access hub, the interaction for inputting a dosage takes 3 screens to perform. The redesign minimizes this workflow to simply hold down the dosage button and your dosage is completed. A confirmation of action then performs to indicate success and transition the next upcoming dosage into the circular home.</p>

          <h3>Focus</h3>
          <ul>
            <li>Visual incentive </li>
            <li>Communicate result of action</li>
            <li>Seamless transition</li>
            <li>Accessibility with larger text</li>
          </ul>
          <h3>Reason for holding down</h3>
          <p>Tapping may make the action easily dismissive. Holding down requires a bit more investment, deterring user from inputting falsely.</p>
          <img className="halfImage" src={process.env.PUBLIC_URL + '/images/projects/mango/Mango-Animated.gif'} />
          <img className="halfImage" src={process.env.PUBLIC_URL + '/images/projects/mango/TakeADose.gif'} />
          <p className="subtitle">Redesign Dosage Action (left) ; Current Dosage Action (right)</p>

          <h3>Purpose of animation</h3>
          <p>Not only for visual incentive and indication, but also can mask shift through the queue (in example, from Crestor to Naproxen). A concern was made for making animations which were too flashy, but the time it occupies is beneficial in requiring the user to take time in taking their medication, not allowing for false inputs.</p>

          <h2>2. Points</h2>
          <p>There are two motivations to the redesigned points "bar":</p>
          <ol>
            <li>The actions which gains you points (input dosage), is now surrounded by the bar itself, visualizing a direct relationship. </li>
            <li>The circular nature reflects the levels, where you move forward to start again at a new level, performing the same task.</li>
          </ol>

          <img className="halfImage" style={{width: "calc(33% - 20px)"}} src={process.env.PUBLIC_URL + '/images/projects/mango/home-v1.png'} />
          <img className="halfImage" style={{width: "calc(33% - 20px)"}} src={process.env.PUBLIC_URL + '/images/projects/mango/home-v2.png'} />
          <img className="halfImage" style={{width: "calc(33% - 20px)"}} src={process.env.PUBLIC_URL + '/images/projects/mango/home.png'} />
          <p className="subtitle">First Iteration (left) ; Second (center) ; Final (right)</p>

          <h2>3. Next Doses</h2>
          <p>Upcoming doses in the current MangoHealth may only be viewed in the schedule screen in an accodian calendar. In the redesign, the next few immediately upcoming doses can be quickly viewed by scrolling down. This reminds users to come back, and use the app again, increasing retention.</p>
          <img className="halfImage" src={process.env.PUBLIC_URL + '/images/projects/mango/home.png'} />
          <img className="halfImage" src={process.env.PUBLIC_URL + '/images/projects/mango/nextdoses.png'} />
          <p className="subtitle"></p>

          <h3>Relationship with current dose and next dose</h3>
          <p>Current dose (circle) and next dose (lower rectangles) share a style as well as UIView structures. Other than centering the dayLabel and overall size, the two UIViews are kept the same, allowing for modular development and a clearer indication of the head and the rest of the queue.</p>
          <hr/>

          <h2>II. Workflow</h2>
          <p>One of the current issues with the Mango Health app is multipoints of entry, or stacking view controllers. With the Home View Controller segueing into the other views without switch the tab, the same view controller becomes accessible in the Home and special view controller, muddling the map of the app, making for a more difficult-to-navigate interface.</p>
          <img className="halfImage" style={{marginLeft: "50%", transform: "translateX(-50%)"}} src={process.env.PUBLIC_URL + '/images/projects/mango/WorkflowIssue.gif'} />
          <p className="subtitle">Redesign Dosage Action (left) ; Current Dosage Action (right)</p>
          <p>Important aspect to note is how the user can access history from the Home and the tab bar, so switch between Home and History shows the same screen, difference indicated by the disappearing back arrow at the top left.</p>
          <img src={process.env.PUBLIC_URL + '/images/projects/mango/workflows.png'} />
          <p className="subtitle">Current Workflow (left) ; Redesigned Workflow (right)</p>
          <p>The solution is a new tab bar with custom, consistent icons.</p>
          <h3>A Central Home</h3>
          <p>The Home icon is placed in the center to refer to a point of action (inspired by Instagram&apos;s placement of uploading photos).</p>
          <h3>Profile vs. More</h3>
          <p>The More icon has been replaced with the Profile icon, as much of the functionality inside of the More VC can be included under a profile. In addition, the profile concept connects the user closer with the application, increasing investment. </p>
          <hr/>

          <h2>III. Add Prescription</h2>
          <p>With the add prescription screen, the format and visual brand from the home screen is continued, showing how certain components translate. Here, we will explore further the visual aspects of the UI.</p>
          <h3>Sacrifice for Simplicity</h3>
          <p>As seen with the navigation icons, the redesigned icons include less detail and explicit description. Although minimalism may cause a bit of initial confusion, it will also cause exploration of each area, moving the user automatically past the home screen.</p>
          <img src={process.env.PUBLIC_URL + '/images/projects/mango/icon-change.png'} />
          <p className="subtitle">Redesigned custom icons (left) ; Original icons (right)</p>
          <h3>Adding Prescription Screens</h3>
          <div className="appScreens">
            <img className="halfImage" src={process.env.PUBLIC_URL + '/images/projects/mango/add-name.png'} />
            <img className="halfImage" src={process.env.PUBLIC_URL + '/images/projects/mango/add-auto.png'} />
            <p className="subtitle">Initial Name Input (left) ; Name Autocomplete (right)</p>
            <img className="halfImage" src={process.env.PUBLIC_URL + '/images/projects/mango/add-main.png'} />
            <img className="halfImage" src={process.env.PUBLIC_URL + '/images/projects/mango/add-shapes.png'} />
            <p className="subtitle">Autofilled Form (left) ; Expanded Shapes Form (right)</p>
            <img className="halfImage" style={{marginLeft: "50%", transform: "translateX(-50%)"}} src={process.env.PUBLIC_URL + '/images/projects/mango/add-complete.png'} />
            <p className="subtitle">Bottom of Form with Complete Button</p>
          </div>

        </div>
      </div>
    )
  }
}

export default ProjectMango
