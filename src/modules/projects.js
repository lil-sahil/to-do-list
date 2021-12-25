import { toDoController } from "./create_to_do"

import { projectNames, 
         projectAddBtn,
         projectContainer } from "../helper_funcs/dom"


// Project controller
// ------------------------------------------------------------------
export const projectController = (() => {

  // Add Event Listners

  const removeSelections = () => {
    // Remove previously selected projects
    projectNames().forEach(ele => {
      ele.classList.remove('project-selected')
    })
  }

  const projectSelectedListner = () => {
    

    projectContainer().addEventListener('click', e => {
      removeSelections()
      console.log(e)
      e.target.addEventListener('click', () => {
        e.target.classList.add('project-selected')
      })
    })


    // // Add "project-selected" class to project that is clicked    
    // projectNames().forEach(ele => {

    //   ele.addEventListener('click', () => {
    //     ele.classList.add('project-selected')
    //   })
    // })  
  }

  const projectAdd = () => {
    projectAddBtn().addEventListener('click', () =>{
      // render project add.
      projectContainer().appendChild(projectRender.mainDisplay())
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
    
    projectNames().forEach(ele => {
      if (ele.classList.contains('project-selected')){
        currentSelectedProject = ele.innerHtml
      }
    })
    
    return currentSelectedProject
  }

  

  const mainController = (() => {
    // Add Event Listners
    projectSelectedListner()
    projectAdd()

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

    let projectItem = document.createElement('li')
    
    projectItem.innerHTML = `
      Project
    `
    return projectItem
  }


  return { mainDisplay }
})()