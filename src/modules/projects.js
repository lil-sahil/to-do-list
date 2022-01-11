import { dataController } from "./data"

import { toDoController,
         toDoRender,
         createToDo } from "./create_to_do"

import { projectNames, 
         projectAddBtn,
         projectContainer } from "../helper_funcs/dom"


// Project controller
// ------------------------------------------------------------------
export const projectController = (() => {

  let projectCount = 1;

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
      if(!(getUniqueProjectNames().includes(`${name.querySelector('input').value}`))){
        let newProjectName = name.querySelector('input').value
        

        getUniqueProjectNames().forEach(dataName => {
                    
          if (!(getDOMProjectNames().includes(`${dataName}`))){
            let oldProjectName = dataName

            dataController.updateArray(dataController.getToDoList().map(item => {
              if (item.project === oldProjectName){
                item.project = newProjectName                 
              }
              return item 
            }))
          }
        })

      }
    })

  }

  const projectAdd = () => {
    projectAddBtn().addEventListener('click', () => {

      let projectName = `Project ${projectCount.toString()}`

      // render project add.
      projectContainer().appendChild(projectRender.mainDisplay(projectName))
      // Add project into database
      toDoController.appendToDo( createToDo(`${projectName}`, "Enter Task") );
      
      projectCount += 1
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
    let projects = [] 
    
    dataController.getToDoList().filter(item => {
      projects.push(item.project)
      
    })
    
    return projects
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


  
  const mainDisplay = (projectName) => {

    let projectItem = document.createElement('li')
    
    projectItem.innerHTML = 
      `
        <input type = "text" value = "${projectName}" class = "project">
        <div class = "delete"><i class="fas fa-trash-alt"></i></div>   
      `
    return projectItem
  }


  return { mainDisplay }
})()