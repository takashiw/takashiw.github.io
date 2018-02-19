import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../ProjectView/style.css'
import './style.css'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

class DetailsCoLab extends Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  }

  scrollTo(id) {
    console.log(id)
    var scrollOptions = {behavior: "smooth", block: "start"}
    var element = document.getElementById(id)
    if (element != null) {
      element.scrollIntoView(scrollOptions)
    } else {
      console.log("No ELement found")
    }
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
          <p className="summary">For two weeks in January and nine weeks in the summer of 2017, I took part in IDEO CoLab’s fellow in Cambridge and San Francisco respectively. Alongside partner companies, we explored applications of emerging technologies like IoT and AI in many fields from energy price markets to home security to transportation.</p>

          <h2>The Experience</h2>
          <p>Working in extremely rapid sprints spanning from 2 days to 7 weeks, I worked on interdisciplinary teams of 3 - 4. My teammates spanned from industrial and graphic designers, undergraduate students, MBAs, to even a rap producer. And my role in each project was just as multifaceted. I built brands and story telling animations as a graphic designer, prototyped in iOS and ReactJS as a software developer, and built cardboard prototypes as an industrial designer. Whatever the project demanded, our team ebbed and flowed as we navigated ambiguity.</p>

          <h2>The Work</h2>
          <p>The prototypes we created were focused on proving feasibility (testing AI in Tensor Flow and iOS apps for IoT) , observing desirability (cardboard form factors used during user interviews), and even determining market viability (mathematic simulations to test new world market designs)</p>
          <p>To scroll to brief write-ups about each project, click the links below:</p>

          <div className="lists" style={{"width" : "100%"}}>
            <h2>Table of Protypes:</h2>
            <ul>
              <li><a className="scrollLink" onClick={(e) => this.scrollTo("sparkfleet")}>SparkFleet</a> - Decentralized city battery compiled of electric transit vehicles</li>
              <li><a className="scrollLink" onClick={(e) => this.scrollTo("tobi")}>Tobi</a> - AI assistant for the job hiring process </li>
              <li><a className="scrollLink" onClick={(e) => this.scrollTo("parker")}>Parker</a> - Performing home utility audits with plug-and-play IoT sensors</li>
              <li><a className="scrollLink" onClick={(e) => this.scrollTo("bernard")}>Bernard</a> - IoT sensor family for elderly fall detection</li>
              <li><a className="scrollLink" onClick={(e) => this.scrollTo("kevin")}>Kevin</a> - Multi-sensor home security</li>
              <li><a className="scrollLink" onClick={(e) => this.scrollTo("oscar")}>Oscar</a> - A little IoT grouch that tracks your trash output</li>
            </ul>
          </div>
   
          <div className="prototype" id="sparkfleet">
            <h2>SparkFleet</h2>
            <p className="summary">[7 Week Sprint - Summer 2017]</p>
            <p className="summary">"How Might We use electric vehicles to arbitrage energy costs?"</p>
            <p className="summary">SparkFleet was a system utilizing bi-directional charging with public transit electric vehicles to arbitrage an entire city's energy: 
              absorbing during energy surpluses and discharging back to the grid during high energy demand. 
              <br/>(🚌 + 🚎 + ... + 🚐) * ⚡️ = 🔋🌆</p>
            <div className="lists">
              <h2>Prototypes Built:</h2>
              <ul>
                <li>iOS Mileage Tracker </li>
                <li>Daily Vehicle Trip Prediction trained on New York bus data</li>
                <li>SparkFleet City simulation</li>
              </ul>
              <h2>Areas of Learning</h2>
              <ul>
                <li>ReactJS Development</li>
                <li>Illustration / Motion Design</li>
                <li>iOS Development</li>
                <li>Mapbox</li>
                <li>EV chargers</li>
                <li>Energy Markets & Duck Curves</li>
              </ul>
            </div>
            <img className="hero" src={process.env.PUBLIC_URL + '/images/colab/sparkfleet/3surplusPortrait.gif'} />
            <h3>The Experience</h3>
            <p>Through a 7 week build sprint, we started from our simple "How Might We", motivated 
                  by Design Thinking to build prototypes to ask and answer questions, interviewing experts from the industries of utility and electric vehicle charging.
                  In the end, we developed a new business design using bi-directional chargers with public transit vehicles to store surplus solar energy and discharge 
                  energy back to the grid during times of high demand.</p>
            <p>We bounced around the world of electric vehicles, testing viability in different markets, 
              using mobile trackers and travel data to see if EVs truly would have extra battery space to utilize as an energy resevoir, interviewing EV owners to realize our target market, defining the necessary factors for this system to work.</p>
            <img src={process.env.PUBLIC_URL + '/images/colab/sparkfleet/notes.png'} />
            <p className="subtitle">The lots of writing and notes that pushed us forward</p>

            <h3>The Final Prototype</h3>
            <p>In order to test the feasibility of a city-wide electric battery, we created a mathematic simulation. 
              <br/>We pulled routes from the San Francisco commute service <a href="https://www.chariot.com/" target="_blank">Chariot</a>, 
              technical specifications from <a href="https://chargedevs.com/features/new-eagle-teams-up-with-inventev-to-offer-electric-ford-transit-vans/" target="_blank">New Eagle's electrified Ford Transit Van</a>,
              and projected solar power surpluses and energy demands for 2020.
            </p>
            <p>
              The final form was the simulation displayed on a big screen. A narrator screen was displayed on an iPad, showing animations for different scenes 
              that occur in the 24 hour life cycle of a Sparkfleet vehicle. The timelines are synced on both screens with Socket.io; the entire application was developed myself with ReactJS.
            </p>
            <video preload="true" autoplay="true" loop>
              <source src={process.env.PUBLIC_URL + '/images/colab/sparkfleet/DemoSimulator.mp4'} type="video/mp4" />
            </video>
            <p className="subtitle">SparkFleet City Visualization - shown on big screen</p>

            <video className="centered" style={{"width" : "80%"}} preload="true" autoplay="true" loop>
              <source src={process.env.PUBLIC_URL + '/images/colab/sparkfleet/Explainer.mp4'} type="video/mp4" />
            </video>
            <p className="subtitle">SparkFleet Narrator Screen - shown on iPad</p>
            <img className="halfImage" src={process.env.PUBLIC_URL + '/images/colab/sparkfleet/adam.jpg'} />
            <img className="halfImage" src={process.env.PUBLIC_URL + '/images/colab/sparkfleet/front_demo.jpg'} />
            <p className="subtitle">Demo showcased at IDEO CoLab Blueprint Event</p>

            <h3>Major Takeaways</h3>
            <p>
              Coming from Florida, I had little experience in the EV market or even a fluctuating energy market. 
              Our problem statement was characterized by its ambiguity, and although it brought some difficulties, 
              it allowed for an awesome amount of freedom for where we could go.
            </p>
            <p>
              Putting trust in the Design Thinking process ended for the better. Our team went through weeks of ambiguous solutions, 
              fearful that we weren't going to end with a single concise solution. And in the end, we didn't. 
              Rather, we had managed to gather enough information to discover new untapped potential in the energy market. 
              Most importantly, our new business design was backedby months of research, interviews, and our simulation. 
              <br/>Our final prototype wasn't just a concise product that could be shipped the next day, but rather it conceptualized what the future could hold for electric vehicles: <br/>more than just a mode of transportation, but a solution to the scalability issues of energy industry of the future.
            </p>
            <p>For a beautifully-thorough document of our entire project process, <a href="http://raphaelhyde.com/port-casestudy-roe.html" target="_html">please check out the write-up created by my teammate, Raphael Hyde.</a></p>
          </div>

          <div className="prototype" id="tobi">
            <h2>Tobi</h2>
            <p className="summary">[2 Weeks of Multi-Day Sprints - Summer 2017]</p>
            <p className="summary">"How Might We use artificial intelligence to reduce bias in the hiring process"</p>
            <p className="summary">Tobi was a collection of 3 applications to assist in different portions of the hiring process: the resume screening, the interview, and determining the final pool of candidates.</p>
            <div className="lists">
              <h2>Prototypes Built:</h2>
              <ul>
                <li>Chatbot Application Portal </li>
                <li>Google Home app for pre-interview debrief and recommended questions</li>
                <li>TobiFit Candidate Score Generator</li>
              </ul>
              <h2>Areas of Learning</h2>
              <ul>
                <li>ChatFuel Development</li>
                <li>Google Assistant Development</li>
                <li>Tensor Flow</li>
              </ul>
            </div>
            <img className="hero" src={process.env.PUBLIC_URL + '/images/colab/tobi/tobi.png'} />

            <h3>Prototype 1 : Chatbot</h3>
            <p>Our chatboat (made available through Slack and Facebook Messenger) would take the user through a screening as an initial step of the application process. 
              The user would have a conversation with the chatbot or "TobiBot", first about the candidates information and then through a "game", 
              where TobiBot would explain a soccer game scenario, asking the candidate what would they do: "Pass or Dribble Forward". From this, we created a score for whether the person was more team-oriented or an individual player.
              The prototype showed that an advantage the chatbot platform can allow for basic screening questions during the hiring process without burdening the hiring team.
            </p>
            <h3>Prototype 2 : Interview Assistant</h3>
            <p>Based on data we gathered from Prototype 1 (TobiBot), we created an interview assistant using the Google Home. The resume and conversations from TobiBot would be parsed 
              to create a short summary about the candidate and suggested questions. This removed the disadvantage of having an unprepared interviewer. 
              The interviewer could walk in, ask Tobi for the debrief, and then provide the quick summary and suggested questions.
            </p>
            <iframe src="https://player.vimeo.com/video/223694041" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <h3>Prototype 3 : Candidate Assistant</h3>
            <p>With the practice of "Technology-Lead Design", we wanted to push the boundaries of Tobi to test where the edges of AI's benefit in the hiring process was.
              So, we gave Tobi full power. What would happen if Tobi could choose the final candidates?
              <br/>We wanted real data, so we actually pulled from the IDEO CoLab Makeathon data (so our actual applications to IDEO CoLab) to see if Tobi would get it right.; whether it would choose the same candidates that IDEO chose.
              <br/>Though we cannot disclose the results, we did gain insights on the limitations of AI in hiring, and from this, we defined new guidelines for designing this form of an AI system.
            </p>
            <div className="appScreens">
              <img src={process.env.PUBLIC_URL + '/images/colab/tobi/Tobi_Explanation-01.png'} />
              <img src={process.env.PUBLIC_URL + '/images/colab/tobi/Tobi_Explanation-03.png'} />
              <img src={process.env.PUBLIC_URL + '/images/colab/tobi/Tobi_Explanation-04.png'} />
              <p className="subtitle">Posters I Illustrated to explain the Tobi system</p>

            </div>
          </div>
          <div className="prototype" id="parker">
            <h2>Parker</h2>
            <p className="summary">[4 Day Sprint - Winter 2017]</p>
            <p className="summary">"How Might We use sensor networks to surface meaningful and actionable information about home energy efficiency for homeowners?"</p>
            <p className="summary">Parker was a collection of sensors with a plug-and-play hub that could perform preliminary home energy audits.</p>
            <div className="lists">
              <h2>Prototypes Built:</h2>
              <ul>
                <li>AC Energy Tracker</li>
                <li>Sparkcore Plug & Play HUB</li>
                <li>Data Visualizer Website</li>
              </ul>
              <h2>Areas of Learning</h2>
              <ul>
                <li>Cardboard Sensor Making</li>
                <li>Front End Web Development</li>
                <li>Illustration</li>
              </ul>
            </div>
            <img className="hero" src={process.env.PUBLIC_URL + '/images/colab/parker/parker-logo.png'} />
            <h3>The Prototypes</h3>
            <p>In order to collect data for Parker, I create a "AC Usage Tracker", which broken down was a bend sensor from a LittleBits connected to a 
              SparkCore. Placed directly in front of the AC unit, the bend determined how much power was being exerted from the AC.
              <br/>On top of that, we created a HUB that included a thermometer and air pressure sensor to determine if any doors or windows were being opened.
              <br/>Based on this data, we compared in inside temperature with outside temperature and other sensors to determine if the 
              home owner could do actions to better the retention of heat in their room, whether that was keeping doors and windows closed, reducing AC, etc.
              </p>
          </div>
          <img className="halfImage" src={process.env.PUBLIC_URL + '/images/colab/parker/parker-sensor.JPG'} />
          <img className="halfImage" src={process.env.PUBLIC_URL + '/images/colab/parker/littleBit.JPG'} />
          <p className="subtitle">AC Energy Tracker aka Hacked Bend Sensor</p>

          <img className="halfImage" src={process.env.PUBLIC_URL + '/images/colab/parker/parker-hub.jpg'} />
          <img className="halfImage" src={process.env.PUBLIC_URL + '/images/colab/parker/parker-hubInsides.jpg'} />
          <p className="subtitle">Parker HUB and Other Sensors Inside</p>

          <img src={process.env.PUBLIC_URL + '/images/colab/parker/HouseSiteMockup_whole.png'} />
          <p className="subtitle">Parker Home Energy Visualization</p>

          <div className="prototype" id="bernard">
            <h2>Bernard</h2>
            <p className="summary">[3 Day Sprint - Winter 2017]</p>
            <p className="summary">"How Might We use an intelligent network of sensors to inform caregivers and care receivers of what’s happening?"</p>
            <p className="summary">Parker was a sensor suite to detect if an elderly person fell in their house. My focus went into the form factors of the sensors,
            building prototypes to be used during user research.</p>
            <div className="lists">
              <h2>Prototypes Built:</h2>
              <ul>
                <li>LittleBits Cardboard Robot Doggo</li>
                <li>Cardboard Pendant</li>
                <li>Many many cardboard prototypes</li>
              </ul>
              <h2>Areas of Learning</h2>
              <ul>
                <li>Cardboard Sensor Making</li>
                <li>The Magic of LittleBits</li>
                <li>NOMAD Network</li>
              </ul>
            </div>
            <img className="hero" src={process.env.PUBLIC_URL + '/images/colab/bernard/logo.png'} />
            <h3>The Prototypes</h3>
            <p>With the power of endless hot glue and cardboard boxes, I created 8 cardboard sensor prototypes. 
              Each prototypes was based on user research we conducted, then we were to test the sensors with further user research.
              The main takeaway of the project was how using a multi-sensor network can allow for dispensible parts, adding and removing sensors from
              the system based on the comfort of the user. Adding sensors only made the network more robust, while removing would not render the system useless.
            </p>
            <img src={process.env.PUBLIC_URL + '/images/colab/GroupShot.png'} />
            <p className="subtitle">Cardboard prototypes created for user testing (the magic of hot glue and LittleBits)</p>

            <img src={process.env.PUBLIC_URL + '/images/colab/Bernie.gif'} />
            <p className="subtitle">What if we packed sensors into a robot dog companion?</p>

          </div>
          <div className="prototype" id="kevin">
            <h2>Kevin</h2>
            <p className="summary">[2 Day Sprint - Winter 2017]</p>
            <p className="summary">"How Might We use home systems & sensors to better identify scenarios & the intent behind them?"</p>
            <p className="summary">Kevin was our team's first prototype. It was a set of sensors used to cross verify whether the person 
            at the door was the homeowner or intruder.</p>
            <div className="lists">
              <h2>Prototypes Built:</h2>
              <ul>
                <li>iOS Home Owner Tracker</li>
                <li>Doormat Pressure Sensor</li>
                <li>Google Home Verification System</li>
              </ul>
              <h2>Areas of Learning</h2>
              <ul>
                <li>iOS Development</li>
                <li>The Magic of LittleBits</li>
              </ul>
            </div>
            <img className="hero" src={process.env.PUBLIC_URL + '/images/colab/kevin/logo.png'} />
            <h3>The Prototypes</h3>
            <p>
              With Kevin, our team learned the basics of multi-sensor networks, beginning our explorations of NOMAD networks and 
              sensor form factor. With the magic of LittleBits and Google Home, we created multiple systems that cross verified door activity 
              and home owner location to determine a simple question: who is at the front door?
            </p>
            <img className="halfImage" src={process.env.PUBLIC_URL + '/images/colab/kevin.jpeg'} />
            <img className="halfImage" src={process.env.PUBLIC_URL + '/images/colab/kevin-unwrapped.jpeg'} />
            <p className="subtitle">Cardboard prototypes created for user testing (the magic of hot glue and LittleBits)</p>
          </div>

          <div className="prototype" id="oscar">
            <h2>Oscar</h2>
            <p className="summary">[8 Hour Makeathon - Fall 2016]</p>
            <p className="summary">"How Might We use IoT sensors to encourage communities to recycle"</p>
            <p className="summary">Oscar was a concept prototype of a smart weight scale that sat in the bottom of 
            a trashcan to track a resident's trash vs. recycling output.</p>
            <h3>The Experience</h3>
            <p>
              Oscar was the result of my first time working with IDEO. 
              For eight hours, a group of about 100 worked feverishly in one of the top floors of the Fidelity Tower in downtown Boston, 
              coming from lots of different parts of the globe. Over those 8 hours, I was introduced to Design Thinking, IDEO overall, the CoLab, and
              the intensity of design sprints. It was the start of my journey with IDEO CoLab. I flew back home to Florida excited for what there might have been to come.
            </p>
            <img src={process.env.PUBLIC_URL + '/images/colab/oscar.gif'} />
            <p className="subtitle">Oscar the Garbage Weight!</p>
          </div>
          <div className="lists" style={{"width" : "100%"}}>
            <h2>Table of Protypes:</h2>
            <ul>
              <li><a className="scrollLink" onClick={(e) => this.scrollTo("sparkfleet")}>SparkFleet</a> - Decentralized city battery compiled of electric transit vehicles</li>
              <li><a className="scrollLink" onClick={(e) => this.scrollTo("tobi")}>Tobi</a> - AI assistant for the job hiring process </li>
              <li><a className="scrollLink" onClick={(e) => this.scrollTo("parker")}>Parker</a> - Performing home utility audits with plug-and-play IoT sensors</li>
              <li><a className="scrollLink" onClick={(e) => this.scrollTo("bernard")}>Bernard</a> - IoT sensor family for elderly fall detection</li>
              <li><a className="scrollLink" onClick={(e) => this.scrollTo("kevin")}>Kevin</a> - Multi-sensor home security</li>
              <li><a className="scrollLink" onClick={(e) => this.scrollTo("oscar")}>Oscar</a> - A little IoT grouch that tracks your trash output</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default DetailsCoLab
