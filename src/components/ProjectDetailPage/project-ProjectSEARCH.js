import React, { Component } from 'react'
import '../ProjectView/style.css'
import './style.css'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

class DetailsProjectSEARCH extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div>
        <div className="header" style={{backgroundColor: "#5cc5e8"}}>
          <Link to='/'>
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </Link>
          <h3 className="date" style={{color: "#5cc5e8"}}>2017 - 2018</h3>
          <h1>Volunteering Design Work to Help Graduating Students with Developmental Disabilities</h1>
          <h3>Duval County Public Schools • Volunteer Work</h3>
        </div>
        <div className="main">
          <p className="summary">Over my last year of college, my mom was working as a Skills Trainer with students with developmental disabilities. 
          Whenever I visited home, I had the chance to meet people from the program she was working with, and I grew to build a connection with the program and its mission. 
          I started with helping with a student's resumes and that work continued onto business cards, advertising brochures, and finally, a video showcasing all the students and their semesters.</p>
          <div className="lists">
            <h2>Experience Gained In:</h2>
            <ul>
              <li>Video Production</li>
              <li>Graphic Design</li>
            </ul>
          </div>
          
          {/* <img className="hero" src={process.env.PUBLIC_URL + '/images/pars/HCTC-SealLone.png'} /> */}

        {/* <iframe className="youtube" src="https://www.youtube.com/embed/eOujgbU94lQ" frameborder="0" allowfullscreen></iframe> */}
        <p>
          For students with development disabilities, once they graduate, students are "aged out" of the programs they have attended since childhood and are left to navigate adulthood alone. 
        </p>
        <p>
          Project SEARCH is a post-graduate program that focuses on helping students integrate themselves in the community through full-time jobs. Project SEARCH with Duval County Public Schools partners with the University of North Florida, working with their facilities faculty to guide students through on-campus internships which lead to full-time work. 
        </p>
        <h2>Graphic Design</h2>
          <img src={process.env.PUBLIC_URL + '/images/ProjectSEARCH/ps_pattern.png'} />
          <p className="subtitle">Business Card Pattern Art</p>
          <p>
            For a lot of the art, I needed to create it in free software so that Duval County Project SEARCH employees could edit the content in later years while being on their limited budget and older computers.
          </p>
          <p>
            For the Brochure, I worked in Microsoft Powerpoint, which is on all the laptops commissioned by Duval County Public Schools. Though challenging, this allows for the design to be used multiple times in the future, rather than depending on someone who has InDesign or another paid software.
          </p>
          <img src={process.env.PUBLIC_URL + '/images/ProjectSEARCH/projectsearchbrochure.png'} />
          <p className="subtitle">Advertising Brochure Made in Microsoft Powerpoint</p>
          <img src={process.env.PUBLIC_URL + '/images/ProjectSEARCH/ProjectSEARCHDisplay@2x.png'} />
          <p className="subtitle">Project SEARCH Sticker and Button</p>
        <h2>Video</h2>
        <p>To commemorate the first graduating class of Project SEARCH, I spent a week filming each student working in their on-campus internships at the University of North Florida. It was an incredible opportunity, as these students I had the chance to interact with in the classroom were now working as employees at various jobs that were tailor fitted through Project SEARCH to fit their skills. 
          Through their employment, Project SEARCH students were interacting with managers, other campus employees, and university students their same age. It was a blessing to see and creating this video gave me a lot of hope for what Project SEARCH can do for the future of adults with developmental disabilities. 
        </p>
        <iframe className="youtube" src="https://www.youtube.com/embed/YoBXtxR290E" frameborder="0" allowfullscreen></iframe>
        <div className="footer">
          {/* <Link to='/'>
              <i class="fa fa-chevron-up" aria-hidden="true"> Return to Top </i>
            </Link> */}
        </div>
        
        </div>

      </div>
    )
  }
}

export default DetailsProjectSEARCH
