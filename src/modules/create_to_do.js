import { toDoItems, showOnClick} from "../helper_funcs/dom.js";

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

  let test_2 = createToDo('Project 2', "test2");
  toDoController.appendToDo(test);

  toDoController.toDoList.forEach( item => {
    
    let toDoItem = document.createElement('div');
    
    toDoItem.innerHTML = 
      `
        <div class = "summary">
          ${item.title}
          ${item.dueDate}
        </div>
        
        <div class = "description" style = "display:none">
          ${item.description}
        </div>
      `
    toDoItem.className += "to-do-item";
    
    toDoItems().appendChild(toDoItem);
    

  });

  showOnClick();
  
})();




