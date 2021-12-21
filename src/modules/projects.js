import { toDoController } from "./create_to_do"



// Project controller
// ------------------------------------------------------------------
export const projectController = (() => {

  // Get the unique project names from to do list
  const getUniqueProjectNames = () => {
    let projects = toDoController.getToDoList().forEach(item => {
      item.project
    })

    return [... new Set(projects)]
  }

  // Current selected Project
  const getCurrentSelectedProjectName = () => {
    return 1
  }

  

  const mainController = () => {
    // getUniqueProjectNames()

    // updateProjectName()

    // deleteProjectName()

    // addProjectName()
      console.log('Main Controller')
  }


  return { mainController, getCurrentSelectedProject }
})()






// Project Render
// ------------------------------------------------------------------
const projectRender = (() => {



  const mainDisplay = () => {
    console.log('Project is working')
  }

  return { mainDisplay }
})()