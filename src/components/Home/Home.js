import React, { Component } from 'react'
import ProjectCollection from '../ProjectCollection/ProjectCollection'
import me from '../../assets/images/Takashi.png'
import './style.css'

class Home extends Component {
    componentDidMount(){
      console.log("THE");
      console.log(this.props);
    }

    render(){
      var animatedStyle
      if(!this.props.homeRevisit){
        animatedStyle = {
          text : {
            animation: "helloText 1.4s 2.4s backwards"
          },
          header : {
            animation: "hello 3.1s 0.2s backwards"
          },
          image : {
            animation: "helloImg 2.2s 1.0s backwards"
          },
          work : {
            animation: "work 1s 3s backwards"
          }
        }
      } else {
        animatedStyle = {
          text : {
            animation: "work 1.4s 0.2s backwards"
          },
          header : {
            animation: "work 1.4s 0.1s backwards"
          },
          image : {
            animation: "work 1.4s 0.3s backwards"
          },
          work : {
            animation: "work 1.4s 0.4s backwards"
          }
        }
      }



      return(
      <main>

        <div className="hello">
          <h2 style={animatedStyle.header}>hey there, I&apos;m <span className="name">Takashi Wickes</span></h2>
          <img style={animatedStyle.image} src={me} />
          <p style={animatedStyle.text}>I am a developer and illustrator studying Computer Science and Art History at the University of Florida</p>
          <p style={animatedStyle.text}>I&apos;ve had the chance to work with <a href="/#/colab">IDEO CoLab</a>, <a href="https://dribbble.com/shots/3841922-Ninjacats-of-the-World" target="_blank">Microsoft</a>, General Electric, and The Florida Alligator. <br/>I&apos;ll be joing the IDEO Cambridge team the summer of 2018 as an Interaction Design & Developer Intern.</p>
        </div>
        <div className="work" style={animatedStyle.work}>
          <h2>and here is some of what I have built</h2>
          <ProjectCollection />
        </div>
        <div className="links">
          <h2>aaaaaaaaand if you want more, you can find it here. Thanks!!</h2>
          <a href="https://dribbble.com/takashiw"><p>Dribbble</p></a>
          <a href="http://github.com/takashiw"><p>GitHub</p></a>
          <a href="http://be.net/takashiw"><p>Behance</p></a>
          <a href="https://twitter.com/takashiwickes"><p>Twitter</p></a>
          <a href="http://www.linkedin.com/in/takashiw"><p>Linkedin</p></a>
          <a href="http://takashiwickes.com/resume.pdf"><p>Resume</p></a>
        </div>
      </main>
    )}

}

export default Home
