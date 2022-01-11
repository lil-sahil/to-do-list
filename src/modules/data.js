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
    
    console.log(toDoList)
    
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
    let tempArray = []

    tempArray = toDoList.filter( item => item.project === projectController.getCurrentSelectedProjectName())
    
    let i = 0
    for (const e of getToDoDate()){
      tempArray[i].dueDate = e.value
      i++
    }

    toDoList = toDoList.filter(item => item.project !== projectController.getCurrentSelectedProjectName())

    for (const e of tempArray){
      toDoList.push(e)
    }
  }

  const updateDescription = () => {
    let tempArray = []

    tempArray = toDoList.filter( item => item.project === projectController.getCurrentSelectedProjectName())

    let i = 0
    for (const e of getToDoDescription()){
      tempArray[i].description = e.value     
      i++
    }

    toDoList = toDoList.filter(item => item.project !== projectController.getCurrentSelectedProjectName())

    for (const e of tempArray){
      toDoList.push(e)
    }
  }


// Update Priority based on user slection.
  const updatePriority = () => {
    let tempArray = []
    tempArray = toDoList.filter( item => item.project === projectController.getCurrentSelectedProjectName())


    toDoItem().forEach( (item, iter) => {

      setPriority(item).forEach( opt => {
        if (opt.checked){
          tempArray[iter].priority = opt.id;
        }
      })
    })

    toDoList = toDoList.filter(item => item.project !== projectController.getCurrentSelectedProjectName())

    for (const e of tempArray){
      toDoList.push(e)
    }
    
  }




  return { getToDoList, updateToDoList, updateArray}  

})()