import { dataController } from "./data"

import { toDoController,
         toDoRender } from "./create_to_do"

import { projectNames, 
         projectAddBtn,
         projectContainer } from "../helper_funcs/dom"


// Project controller
// ------------------------------------------------------------------
export const projectController = (() => {

  // Add Event Listners
  const projectSelectedListner = () => {
    
    projectContainer().addEventListener('click', e => {
      
      if (e.target.nodeName === "LI"){
        
        removeSelections()
        e.target.classList.add('project-selected')
  
        getCurrentSelectedProjectName()
  
        toDoRender.display()
      }
    })
  }


  const updateProjectName = () => {
         
    projectNames().forEach(name => {
      // If project name not in dataset
      if(!(dataController.getToDoList().includes(`${name.querySelector('input').value}`))){
        let newProjectName = name.querySelector('input').value

        getUniqueProjectNames().forEach(dataName => {
                    
          console.log(dataName)
          if (!(getDOMProjectNames().includes(`${dataName}`))){
            let oldProjectName = dataName
            console.log(oldProjectName)
            
            let test = dataController.getToDoList().map(item => {
              if (item.project === oldProjectName){
                item.project = newProjectName
                console.log(newProjectName)
              } 
            })
          }
        })

      }
    })
  }

  const projectAdd = () => {
    projectAddBtn().addEventListener('click', () => {
      // render project add.
      projectContainer().appendChild(projectRender.mainDisplay())
    })
  }


  // Get all project names from DOM
  const getDOMProjectNames = () => {

    let domProjects = []

    projectNames().forEach(name => {
      domProjects.push(name)
    })

    return domProjects
  }

  // Get the unique project names from to do list
  const getUniqueProjectNames = () => {
    let projects = dataController.getToDoList().forEach(item => {
      item.project
    })

    return [... new Set(projects)]
  }

  const removeSelections = () => {
    // Remove previously selected projects
    projectNames().forEach(ele => {
      ele.classList.remove('project-selected')
    })
  }

  // Current selected Project
  const getCurrentSelectedProjectName = () => {
    let currentSelectedProject = ""
    
    projectNames().forEach(ele => {
      if (ele.classList.contains('project-selected')){
        currentSelectedProject = ele.querySelector('input').value
      }
    })
    
    return currentSelectedProject
  }

  
  const onClickController = (() => {
    updateProjectName()
  })()

  const mainController = (() => {
    // Add Event Listners
    projectSelectedListner()
    projectAdd()

    // getUniqueProjectNames()


    // updateProjectName()

    // deleteProjectName()

    // addProjectName()
  })()


  return { getCurrentSelectedProjectName, updateProjectName}
})()






// Project Render
// ------------------------------------------------------------------
const projectRender = (() => {

  // Event listner


  
  const mainDisplay = () => {

    let projectItem = document.createElement('li')
    
    projectItem.innerHTML = 
      `
        <input type = "text" value = "Project" class = "project">
        <div class = "delete"><i class="fas fa-trash-alt"></i></div>   
      `
    return projectItem
  }


  return { mainDisplay }
})()