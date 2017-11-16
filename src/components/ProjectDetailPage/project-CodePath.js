import React, { Component } from 'react'
import '../ProjectView/style.css'
import './style.css'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

class DetailsCode extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div>
        <div className="header" style={{backgroundColor: "rgb(254, 186, 73)"}}>
          <Link to='/'>
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </Link>
          <h3>Jan 2016 • CodePath University</h3>
          <h1>Teaching and Learning iOS at the Same Time</h1>
        </div>
        <div className="main">
          <p className="summary">In our fourth semester in college, CodePath started their university program, with UF included in their pilot schools. The course was in iOS development. My roommate Nikhil and I were interested, but we were late to enroll—as students. So with no knowledge of iOS development, we signed up as the only two student teachers and went on to lead a course of 24 students in how to develop in iOS.</p>

          <h2>The Story</h2>

          <p>With UF being a pilot school, we worked directly with the creators of the CodePath University program, who were based in San Francisco. This included hours of late night Google Hangout calls where they would walk us through step-by-step the week’s lessons, projects, and possible questions that could come up. Then, on the following Tuesday and Thursday nights, we would teach the exact same content to the class that comprised of UF students from first year business students to fifth year computer science.</p>
          <p>This process of learn the week before and teach the next continued for the entire 12 week course. And by the end of it, our class had the knowledge of how to develop for iOS, had completed and demoed 6 full functional apps in small team groups, and the UF CodePath Class of 2016 received the highest approval rating out of the 26 pilot schools.</p>
          <img src={process.env.PUBLIC_URL + '/images/poyo.gif'} />
          <p className="subtitle">Logo animation for our first full feature iOS app</p>


        </div>
      </div>
    )
  }
}

export default DetailsCode
