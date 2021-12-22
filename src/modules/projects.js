import { toDoController } from "./create_to_do"
import { projectNames } from "../helper_funcs/dom"


// Project controller
// ------------------------------------------------------------------
export const projectController = (() => {

  // Add Event Listners

  const projectSelectedListner = () => {
    
    // Add "project-selected" class to project that is clicked
    projectNames().forEach(ele => {
      ele.addEventListener('click', () => {
        ele.classList.add('project-selected')
      })
    })
  }

  // Get the unique project names from to do list
  const getUniqueProjectNames = () => {
    let projects = toDoController.getToDoList().forEach(item => {
      item.project
    })

    return [... new Set(projects)]
  }

  // Current selected Project
  const getCurrentSelectedProjectName = () => {
    let currentSelectedProject = ""
    console.log(projectNames())
    projectNames().forEach(ele => {
      if (ele.classList.contains('project-selected')){
        currentSelectedProject = ele.innerHtml
      }else {
        ele.classList.remove('project-slected')
      }
    })
    
    return currentSelectedProject
  }

  

  const mainController = (() => {
    // Add Event Listners
    projectSelectedListner()

    // getUniqueProjectNames()

    // updateProjectName()

    // deleteProjectName()

    // addProjectName()
  })()


  return { getCurrentSelectedProjectName }
})()






// Project Render
// ------------------------------------------------------------------
const projectRender = (() => {



  const mainDisplay = () => {
    console.log('Project is working')
  }

  return { mainDisplay }
})()