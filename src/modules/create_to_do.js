import { toDoItems } from "../helper_funcs/dom.js";

// Create to do factory

const createToDo = (project, title, description = 'Provide Description', dueDate = 'Select Due Date', priority = 'Select Priority') => {
  return { project, title, description,dueDate, priority };
};



const toDoController = (() => {

  // Initialize List
  let toDoList = [];

  // Push created to do list to list
  const appendToDo = (toDo) => {
    toDoList.push(toDo);
  };

  return { toDoList, appendToDo }
})();



const toDoRender = (() => {
  let test = createToDo('Project 1', "test1");
  toDoController.appendToDo(test);

  toDoController.toDoList.forEach( item => {
    
    let toDoItem = document.createElement('div');
    
    toDoItem.innerHTML = 
      `
        ${item.project}
        ${item.title}
        ${item.description}
        ${item.dueDate}
      `
    toDoItems().appendChild(toDoItem);
  });
  
})();




