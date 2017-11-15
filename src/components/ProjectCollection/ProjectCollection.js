import React, { Component } from 'react'
import './style.css'
import Project from '../ProjectView/ProjectView'
import projects from '../../Projects.json'

const rowHeight = 240
const rowSpacing = 10

class ProjectCollection extends Component {
  getContainerStyle(isRightmost, size){
    if(size > 1){
      return { width: "66.66%" }
    } else if (isRightmost){
      return { float: "right"}
    }
  }

  decrement(rowOccupied){
    for(var i = 0; i < rowOccupied.length; i++){
      rowOccupied[i]--
    }
    return rowOccupied
  }

  createGridSystem(){
    var rows = []
    var rowOccupied = [0, 0, 0]

    for (var i=0; i < projects.length; i++) {
      var projectData = projects[i]
      var containerStyle = this.getContainerStyle(false, projectData.columns)

      var col = projectData.columns
      var row = projectData.rows

      var projectHeight =  row * (rowHeight + (row-1)*rowSpacing) + 'px'

      for(var j = 0; j < col; j++){
        for(var k = 0; k < rowOccupied.length; k++){
            if(rowOccupied[k] === 0){
              rowOccupied[k] = row
              if(k === rowOccupied.length - 1){
                containerStyle = this.getContainerStyle(true, projectData.columns)
                rowOccupied = this.decrement(rowOccupied)
              }
              break;
            }
        }
      }

      rows.push(
        <div className="container" style={containerStyle} key={projectData.title}>
          <Project
            title={projectData.title}
            subtitle={projectData.subtitle}
            backgroundColor={projectData.color}
            image={projectData.thumbnail}
            style={{height : projectHeight}}
            link={projectData.url}
          />
        </div>
      )
    }
    return rows
  }

  render() {
    var rows = this.createGridSystem()

    return (
        <div className="projectContainer">
          {rows}
        </div>
    )
  }
}

export default ProjectCollection
