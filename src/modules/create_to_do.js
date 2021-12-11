import { toDoItems, showOnClick, addtoDoButton} from "../helper_funcs/dom.js";

// Create to do factory

const createToDo = (project, title, description = 'Provide Description', dueDate = '2021-10-01', priority = 'Select Priority') => {
  return { project, title, description,dueDate, priority };
};


const toDoController = (() => {

  // Initialize List
  let toDoList = [];

  // Push created to do list to list
  const appendToDo = (toDo) => {
    toDoList.push(toDo);
  };

  addtoDoButton.addEventListener('click', () => {
    appendToDo( createToDo('Project 1', 'Brush teeth') );
    toDoRender.display();
  });


  // const updateItems = () => {

  // }
  

  return { toDoList, appendToDo }
})();



const toDoRender = (() => {

  const removeAllChildNodes = (ele) => {
    while (ele.firstChild){
      ele.removeChild(ele.firstChild);
    }; 
  };


  const rendertoDoItem = (i) => {
    let title = i.title
    let description = i.description
    let dueDate = i.dueDate


    let toDoItem = document.createElement('div');

    toDoItem.innerHTML = 
      `
        <div class = "summary">
          <div class = "title-form"> <input type = "text", value = ${title}> </div>
          <div class = "date"> <input type = "date", value = ${dueDate}> </div>
        </div>

        <div class = "description">
          <div class = "description-form"> <input type = "text", value = ${description}> </div>
        </div>
      `      
    toDoItem.className += "to-do-item";

    return toDoItem;
  };

  const display = () => {
      // Remove previously loaded to do items
    removeAllChildNodes(toDoItems());

    toDoController.toDoList.forEach( item => {        

      toDoItems().appendChild(rendertoDoItem(item));

    });
    showOnClick();
  }

  return { display }
  
})();




