import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Theia from './components/ProjectDetailPage/project-Theia'
import DetailsMyopic from './components/ProjectDetailPage/project-Myopic'
import ProjectMedidock from './components/ProjectDetailPage/project-Medidock'
import ProjectMango from './components/ProjectDetailPage/project-Mango'

import './index.css'

var isRevisiting = false

const PersistentHome = (props) => {
  return (
    <Home homeRevisit={isRevisiting} />
  )
}

class App extends Component {

  constructor(props){
    super(props)
    console.log("HEELLLLOOOOO")
  }

  componentDidMount(){
    isRevisiting = true
  }

  render() {
    return (

      <div className="App">
        <Switch>
          <Route exact path='/' render={PersistentHome} />
          <Route path='/theia' component={Theia}/>
          <Route path='/vr-myopic' component={DetailsMyopic}/>
          <Route path='/medidock' component={ProjectMedidock}/>
          <Route path='/mango' component={ProjectMango}/>
        </Switch>
      </div>
    )
  }
}


export default App
