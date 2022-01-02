import { projectController } from "./projects";


import { toDoItem,  
         getToDoTitle,
         getToDoDate,
         getToDoDescription,
         setPriority} from "../helper_funcs/dom.js";


export const dataController = (() => {

  // Initialize List
  let toDoList = [];

  const getToDoList = () => {
    return toDoList;
  }

  const updateArray = (newList) => {
    toDoList = newList
  }


  const updateToDoList = () => {
    updateDate()
    updateDescription()
    updateTitle()
    updatePriority()


    // console.log(toDoList)
  }


  const updateTitle = () => {
    let tempArray = []

    tempArray = toDoList.filter( item => item.project === projectController.getCurrentSelectedProjectName())

    let i = 0
    for (const e of getToDoTitle()){
      tempArray[i].title = e.value
      i++
    }

    toDoList = toDoList.filter(item => item.project !== projectController.getCurrentSelectedProjectName())

    for (const e of tempArray){
      toDoList.push(e)
    }
  }

  const updateDate = () => {
    
    let i = 0

    // Update the date
    for (const e of getToDoDate()){
      if (toDoList[i].project === projectController.getCurrentSelectedProjectName()){

        toDoList[i].dueDate = e.value
      }
      i++
    }
  }

  const updateDescription = () => {
    
    let i = 0

    // Update the description
    for (const e of getToDoDescription()){
      if (toDoList[i].project === projectController.getCurrentSelectedProjectName()){

        toDoList[i].description = e.value
      }
      i++
    }
  }


// Update Priority based on user slection.
  const updatePriority = () => {

    toDoItem().forEach( (item, iter) => {

      setPriority(item).forEach( opt => {
        if (opt.checked){
          toDoList[iter].priority = opt.id;
        }
      })
    })
  }




  return { getToDoList, updateToDoList, updateArray}  

})()