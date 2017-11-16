import React, { Component } from 'react'
import '../ProjectView/style.css'
import './style.css'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

class DetailsFloatie extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div>
        <div className="header" style={{backgroundColor: "rgb(188, 110, 41)"}}>
          <Link to='/'>
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </Link>
          <h3>Oct 2016 • Florida Hackers & GitHub</h3>
          <h1>Throwing a State-wide Student Conference</h1>
        </div>
        <div className="main">
          <p className="summary">With a couple of friends from 5 different Florida universities, we organized a 2 day leadership conference in Orlando, FL, in partnership with GitHub. The event would later model GitHub’s Field Day, taking the idea international.</p>
          <div className="lists">
            <h2>The Mission of Floatie</h2>
            <p>“connect student leaders across our Sunshine State in a movement to break university boundaries.”</p>
            <h2>The Motto</h2>
            <p>A rising tide lifts all boats.</p>
          </div>
          <img className="hero" style={{marginBottom: "-30px"}} src={process.env.PUBLIC_URL + '/images/floatie/floatie.png'} />


        <p>With my role as Director of User Experience, I worked to ensure that the entire event ran in focus of this mission, and more specifically, I worked on the following:</p>
            <ul>
              <li>Creating an environment aligned with the purpose of the conference</li>
              <li>Developing the brand and all marketing assets</li>
              <li>Designing website</li>
              <li>Selecting speakers and reviewing talks</li>
              <li>Emceeing the event</li>
            </ul>



          <h2>The Brand</h2>
          <p>With the event being thrown by the same of us who founded Florida Hackers, we wanted to refer back to our beach ball logo of FH. It just so happened that at our 1206 Retreat where the idea for Floatie was concieved, we also bought a giraffe pool floatie along with the beachballs we purchased (because all about the brand).</p>
          <p>With our state, school rivalries can be strong, especially during football season, but with starting Florida Hackers, we found that when we as university students work together past the borders of our schools, we could acchieve a whole lot more.</p>
          <p>This created our value: Collaboration over Competition. And Floatie was our attempt to bring this to a broader audience: from hackathons to all school tech organizations.</p>
          <p>So to consolidate this mission (and half of us coming from beach towns across Florida), we drew the metaphor of how when a sea rises, everything rises with it.</p>

          <img src={process.env.PUBLIC_URL + '/images/floatie/website.png'} />
          <p className="subtitle">Floatie Event Website</p>

          <p>If an individual school rises, it can only go so high, and it only benefits that school. But, if we attempt to improve ourselves as a state-wide community, everyone rises, and the shared resources and knowledge can take us higher than what we could do individually.</p>
          <p>This was our message to spread, and this is how Floatie got its name.</p>

          <img src={process.env.PUBLIC_URL + '/images/floatie/stage.jpg'} />
          <p className="subtitle">Stage with Banners</p>


          <h2>The Conference</h2>
            <img src={process.env.PUBLIC_URL + '/images/floatie/the-whole-crew.jpg'} />
            <p className="subtitle"></p>
            <p>With our organizing team of 8 (made up of only undergraduate college students), we successfully threw the event with 75 student leaders from 8 different schools around the state of Florida. Held in the historic Church Street Exchange in Downtown Orlando, we managed everything catering from local restaurants, renting out mansions through AirBnB so attendees could take discussions out of the conference, and managing happy hour at the Orlando design company Purple, Rock, Scissors: all this focused on keeping Florida in focus.</p>

            <img src={process.env.PUBLIC_URL + '/images/floatie/organizers.jpg'} />
            <p className="subtitle">The Organizing Crew</p>

            <p>Our speakers spanned from student hackathon organizers to the founder of Hackathon Hackers EU to the executive director of a Tallahassee startup incubator.</p>
            <p>Our Barcamp discussions had students who lived hundreds of miles apart conversing about topics such as statewide collaboration and diversity in tech.</p>
            <p>We made sure the entirety of the event would not only bring these students together, but also bring the culture of Florida together by not working as individual schools, but working together as a state-wide community.</p>

            <img src={process.env.PUBLIC_URL + '/images/floatie/crowd.jpg'} />
            <p className="subtitle">Enjoying a good opening ceremony</p>
            <img src={process.env.PUBLIC_URL + '/images/floatie/fh_talk.jpg'} />
            <p className="subtitle">Giving a talk about Florida Hackers with Christian Espinosa</p>

            <img src={process.env.PUBLIC_URL + '/images/floatie/gifn-booth.gif'} />
            <p className="subtitle">From a Gifn photobooth provided by Purple</p>
            <img src={process.env.PUBLIC_URL + '/images/floatie/booth.jpg'} />
            <p className="subtitle">The fancy photobooth</p>

            <img src={process.env.PUBLIC_URL + '/images/floatie/purpl.jpg'} />
            <p className="subtitle">Happy Hour at Rock Purple Scissors</p>

            <img src={process.env.PUBLIC_URL + '/images/floatie/barcamp.jpg'} />
            <p className="subtitle">Matt O'Hagan talking about branding in a Barcamp discussion</p>
            <img src={process.env.PUBLIC_URL + '/images/floatie/usf.jpg'} />
            <p className="subtitle">Writing down suggestions for Barcamp</p>
            <img src={process.env.PUBLIC_URL + '/images/floatie/lucas.jpg'} />
            <p className="subtitle">Lucas Lindsey from Domi Station giving a guest talk</p>
            <img src={process.env.PUBLIC_URL + '/images/floatie/mlh.jpg'} />
            <p className="subtitle">Shy Ruparel from MLH</p>
            <img className="halfImage" src={process.env.PUBLIC_URL + '/images/floatie/on_stage.jpg'} />
            <img className="halfImage" src={process.env.PUBLIC_URL + '/images/floatie/speaking.jpg'} />
            <p className="subtitle">Closing Ceremonies on the first Floatie</p>


        </div>
      </div>
    )
  }
}

export default DetailsFloatie
