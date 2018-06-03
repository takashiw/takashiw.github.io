import React, { Component } from 'react'
import { Link as ReactLink} from 'react-router-dom'
import './style.css'

class Link extends React.Component {
  parseTo(to) {
    let parser = document.createElement('a');
    parser.href = to;
    return parser;
  }
  isInternal(toLocation) {
    return window.location.host === toLocation.host;
  }

  render() {
    const {to, children, ...rest} = this.props;
    const toLocation = this.parseTo(to);
    const isInternal = this.isInternal(toLocation);
    if (isInternal) {
      return (<ReactLink to={toLocation.pathname} {...rest}>{children}</ReactLink>);
    } else {
      return (<a href={to} target="_blank" {...rest}>{children}</a>);
    }
  }
}

class ProjectView extends Component {
  render() {
    // console.log("Hello " + this.props.type);
    console.log("Hello " + this.props.socials);
    if(this.props.type == "social") {
      return(
        <div className="socialGroupContainer" style={this.props.style}>
          <Link to={this.props.socials[0].url}>
          <div className="socialContainer">
            <div className="social" style={{margin: "0 5px 5px 0", backgroundColor: this.props.socials[0].backgroundColor}}>
              <img src={process.env.PUBLIC_URL + '/images/' + this.props.socials[0].icon} />
              <div className="titleContainer" style={{backgroundColor: this.props.socials[0].color}}>
                <h1 className="title">{this.props.socials[0].title}</h1>
              </div>
            </div>
          </div>
          </Link>
          <Link to={this.props.socials[1].url}>
          <div className="socialContainer">
            <div className="social" style={{margin: "0 0 5px 5px", backgroundColor: this.props.socials[1].backgroundColor}}>
              <img src={process.env.PUBLIC_URL + '/images/' + this.props.socials[1].icon} />
              <div className="titleContainer" style={{backgroundColor: this.props.socials[1].color}}>
                <h1 className="title">{this.props.socials[1].title}</h1>
              </div>
            </div>
          </div>
          </Link>
          <Link to={this.props.socials[2].url}>
          <div className="socialContainer">
            <div className="social" style={{margin: "5px 5px 0 0", backgroundColor: this.props.socials[2].backgroundColor}}>
              <img src={process.env.PUBLIC_URL + '/images/' + this.props.socials[2].icon} />
              <div className="titleContainer" style={{backgroundColor: this.props.socials[2].color}}>
                <h1 className="title">{this.props.socials[2].title}</h1>
              </div>
            </div>
          </div>
          </Link>
          <Link to={this.props.socials[3].url}>
          <div className="socialContainer">
            <div className="social" style={{margin: "5px 0 0 5px", backgroundColor: this.props.socials[3].backgroundColor}}>
              <img src={process.env.PUBLIC_URL + '/images/' + this.props.socials[3].icon} />
              <div className="titleContainer" style={{backgroundColor: this.props.socials[3].color}}>
                <h1 className="title">{this.props.socials[3].title}</h1>
              </div>
            </div>
          </div>
          </Link>
        </div> )
    }

    return(
      <Link to={this.props.link}>
        <div className="project" style={this.props.style}>
          <img className="thumbnail" src={process.env.PUBLIC_URL + '/images/' + this.props.image} alt={this.props.title}/>
          <div className="titleContainer" style={{backgroundColor: this.props.backgroundColor}}>
            <h1 className="title">{this.props.title}</h1>
            <h3>{this.props.subtitle}</h3>
          </div>
        </div>
      </Link>
    )
  }
}

class SocialView extends Component {
  render() {

    return(
        <div className="socialGroupContainer" style={this.props.style}>
          <div className="socialContainer">
            <div className="social"></div>
            {/* <img className="thumbnail" src={process.env.PUBLIC_URL + '/images/' + this.props.image} alt={this.props.title}/> */}
          </div>
          <div className="socialContainer">
            <div className="social"></div>
            {/* <img className="thumbnail" src={process.env.PUBLIC_URL + '/images/' + this.props.image} alt={this.props.title}/> */}
          </div>
          <div className="socialContainer">
            <div className="social"></div>
            {/* <img className="thumbnail" src={process.env.PUBLIC_URL + '/images/' + this.props.image} alt={this.props.title}/> */}
          </div>
          <div className="socialContainer">
            <div className="social"></div>
            {/* <img className="thumbnail" src={process.env.PUBLIC_URL + '/images/' + this.props.image} alt={this.props.title}/> */}
          </div>
          
        </div>
    )
  }
}

export default ProjectView
