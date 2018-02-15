import React, { Component } from 'react'
import '../ProjectView/style.css'
import './style.css'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

class ProjectTunaPasta extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div>
        <div className="header" style={{backgroundColor: "rgb(0,206,215)"}}>
          <Link to='/'>
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </Link>
          <h3>Summer 2017 • Tuna Pasta Podcast</h3>
          <h1>Sharing the stories of Americans while on a roadtrip from FL to CA</h1>
        </div>
        <div className="main">
          <p className="summary">With summer internships in San Francisco, my roommate Nikhil and I decided to drive across the country from Florida to California. And along the way, we wanted to make a project, A Big Project.
          So, starting in a park in Atlanta, we pulled out our iPhones as tape recorders and interviewed people on the street, trails, parks, and farms we stayed at. 
          </p>
          <p className="summary">18 days and 6,387 miles later, we arrived in San Fracisco with 20+ hours of recordings, enough to create a 13 episode podcast.</p>
          <div className="lists">
            <h2>The Questions</h2>
            <ul>
              <li>"Who are you?"</li>
              <li>"Where are you from?"</li>
              <li>"What brought you here?"</li>
              <li>"What is the greatest life lesson you have learned in your time being here?"</li>
            </ul>
            <h2>Personal Learning Areas</h2>
            <ul>
              <li>Travel Journalism and Interviewing</li>
              <li>Script Writing</li>
              <li>Audio Editing</li>
              <li>Marketing Design / Illustration</li>
              <li>Publishing a Podcast</li>
              <li>6387 miles worth of lessons</li>
            </ul>
          </div>
          <img className="hero" style={{"margin-bottom": -20}} src={process.env.PUBLIC_URL + '/images/projects/tunapasta/PeepsintheCorner.png'} />
          <iframe className="soundcloud" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/329615571&amp;color=%2394e3f8&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>
          
          <h2>The Work</h2>
          <ul>
          <li><span style={{"font-weight": "500"}}>Monday-Tuesday:</span> <br/>For each episode, Nikhil and I wrote and revised a full length script to tell the story around the interview. We would send it to our editing assitant Jasmina for a final look over.</li>
          <li><span style={{"font-weight": "500"}}>Wednesday:</span> <br/>Then, we would take the script to the mic in the makeshift studio we would make with pillows, chairs, and blankets in our apartment in the SoMa neighborhood. </li>
          <li><span style={{"font-weight": "500"}}>Thursday:</span> <br/>Once we had the recording, we would edit it in Adobe Audition. Include royalty-free music from artists on SoundCloud.
          <br/>Then, I would sketch and illustrate Episode Cover Art to go with each episode on our Facebook page. We would upload the episode to SoundCloud, submit it to iTunes, schedule a post on Facebook, then go to sleep to wake up to the episode being released Friday early morning.        </li>
          </ul>
          <p>
            This was our schedule for 13 weeks, working in the little time we have after working full days at our internships. It was a busy summer, but by the end, the process was a well-oiled machine.
          </p>

          <h2>The Writing</h2>
          <img className="" src={process.env.PUBLIC_URL + '/images/projects/tunapasta/scripts.png'} />
          <p className="subtitle">All our scripts</p>

          <p>In the end, we wrote 14000+ words for our scripts. In the beginning, we discovered the challenge of writing stories that are meant to be audio in their final form. 
            <br/>We focused on empathsizing our personalities in the writing, going for some of the vivid story-telling style of This American Life & Serial, but bringing the casual style of Millenial. 
            <br/>Along the way, we found our voices, and in the end, we wrote 14000+ words with the purpose of bringing the audience into the interesting scenarios we found ourselves in, approaching strangers and asking them to reveal their greatest life lessons. </p>

          <h2>The Illustrations</h2>
          <img className="" src={process.env.PUBLIC_URL + '/images/TunaPasta@2x.png'} />
          <p className="subtitle"></p>
          <p>
            We wanted a way to summarize each episode with a piece of art. So, for each episode, I illustrated cover photos with references to the episodes, from the seagulls and Peter Sagal of Chicago to nail on the road that popped our tires in Virginia.
          </p>
          <p>
            The illustration process was finding an image that we took from the trip, "sketching" the art by drawing over the image in Adobe Illustrator, iterating on the art from there, and compiling all the pieces together. 
            This process removed the sketching part of the process, allowing for me to actually keep up with the rapid weekly schedule.
          </p>
          <img src={process.env.PUBLIC_URL + '/images/projects/tunapasta/AllCoverPhotos.gif'} />
          <p className="subtitle">All of our cover photos</p>

          <h2>The Website</h2>
          <a href="http://tunapastapodcast.org/" target="_blank">
          <video preload="true" autoplay="true" loop>
            <source src={process.env.PUBLIC_URL + '/images/projects/tunapasta/TunaPastaWebsite.mp4'} type="video/mp4" />
          </video>
          </a>
          <p className="subtitle"><a href="http://tunapastapodcast.org/" target="_blank">tunapastapodcast.org</a></p>
          <p>
            Heavily influenced by the beautiful website for <a href="https://stownpodcast.org/" target="_blank">S-Town</a>, we decided to develop site a to provide 
            the experience of coming along with us on the road, passing under the many highway signs and different kinds of roads.
          </p>
          <p>
            The development side brought lots of lessons learned in Javascript, flexing HTML and CSS muscles, and having fun making a funky website.
          </p>
          <p>
            Check out the code <a href="https://github.com/TunaPasta/tunapasta" target="_blank">here on GitHub</a>
          </p>

          <h2>Other Content</h2>
          <div className="facebookContainer-half">
            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftunapastapodcast%2Fvideos%2F840555189433571%2F&show_text=0&width=476" width="476" height="476" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
          </div>
          <div className="facebookContainer-half">
            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftunapastapodcast%2Fvideos%2F855584421263981%2F&show_text=0&width=476" width="476" height="476" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
          </div>
          <p className="subtitle" style={{"margin-top": "-30px"}}>Interview snippet video clip made for Facebook</p>
          <img className="" src={process.env.PUBLIC_URL + '/images/projects/tunapasta/coverphoto-closed.png'} />
          <img className="" src={process.env.PUBLIC_URL + '/images/projects/tunapasta/coverphoto-out.png'} />
          <p className="subtitle">Pre- and Post-Premiere Cover Photos</p>

          <img className="" src={process.env.PUBLIC_URL + '/images/projects/tunapasta/book.png'} />
          <p className="subtitle">Potential Next Project??</p>

          <h2>Tuna Pasta Links</h2>
          <div className="lists">
            <h2>Listen</h2>
            <ul>
              <li><a href="https://itunes.apple.com/us/podcast/tuna-pasta/id1251828332?mt=2" target="_blank">Apple Podcasts</a></li>
              <li><a href="http://www.stitcher.com/podcast/takashi-wickes/tuna-pasta" target="_blank">Stitcher</a></li>
              <li><a href="https://soundcloud.com/tunapastapodcast" target="_blank">SoundCloud</a></li>
            </ul>
            <h2>Press</h2>
            <ul>
              <li><a href="http://www.gainesville.com/news/20170902/two-uf-students-create-podcast-about-cross-country-adventure" target="_blank">The Gainesville Sun</a></li>
              <li><a href="http://news.ufl.edu/articles/2017/08/road-trip-oppor-tuna-ty.php" target="_blank">University of Florida Press</a></li>
              <li><a href="http://www.alligator.org/news/article_e1a1b4e4-9370-11e7-a352-f7312de189a0.html" target="_blank">The Florida Alligator</a></li>
              <li><a href="https://spoonuniversity.com/lifestyle/tuna-pasta-podcast-meet-the-cross-country-founders-and-hear-their-story" target="_blank">Spoon University</a></li>
              <li><a href="https://medium.com/tuna-pasta/hello-from-tuna-pasta-cace1e6e220c" target="_blank">Medium</a></li>
            </ul>
            <h2>Follow</h2>
            <ul>
              <li><a href="https://www.facebook.com/tunapastapodcast" target="_blank">Apple Podcasts</a></li>
              <li><a href="https://twitter.com/tunapastapod" target="_blank">Stitcher</a></li>
              <li><a href="https://www.instagram.com/tunapastapodcast/" target="_blank">Instagram</a></li>
            </ul>
          </div>

        </div>
      </div>
    )
  }
}

export default ProjectTunaPasta
