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

export default ProjectView
