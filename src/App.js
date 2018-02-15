import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Theia from './components/ProjectDetailPage/project-Theia'
import DetailsMyopic from './components/ProjectDetailPage/project-Myopic'
import ProjectMedidock from './components/ProjectDetailPage/project-Medidock'
import ProjectMango from './components/ProjectDetailPage/project-Mango'
import ProjectCoLab from './components/ProjectDetailPage/project-CoLab'
import ProjectSwipemoji from './components/ProjectDetailPage/project-Swipemoji'
import ProjectFloatie from './components/ProjectDetailPage/project-Floatie'
import ProjectCodePath from './components/ProjectDetailPage/project-CodePath'
import ProjectPizza from './components/ProjectDetailPage/project-Pizza'
import ProjectTunaPasta from './components/ProjectDetailPage/project-TunaPasta'

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
          <Route path='/colab' component={ProjectCoLab}/>
          <Route path='/swipemoji' component={ProjectSwipemoji}/>
          <Route path='/codepath' component={ProjectCodePath}/>
          <Route path='/floatie' component={ProjectFloatie}/>
          <Route path='/pizza' component={ProjectPizza}/>
          <Route path='/tunapasta' component={ProjectTunaPasta}/>
        </Switch>
      </div>
    )
  }
}


export default App
