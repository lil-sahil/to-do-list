import { toDoItems,
         toDoItem, 
         toDoSummary, 
         addtoDoButton, 
         getToDoTitle,
         getToDoDate,
         getToDoDescription,
         toDoDelete} from "../helper_funcs/dom.js";




// To Do Factory
// ------------------------------------------------------------------

const createToDo = (project, title, description = 'Provide Description', dueDate = '2021-10-01', priority = 'Select Priority') => {
  return { project, title, description,dueDate, priority };
};




// To Do Controller Module
// ------------------------------------------------------------------

const toDoController = (() => {

  // Initialize List
  let toDoList = [];

  // Push created to do list to list
  const appendToDo = (toDo) => {
    toDoList.push(toDo);
  };

  addtoDoButton.addEventListener('click', () => {
    appendToDo( createToDo('Project 1', "Enter Task") );
    updateToDoList();
    toDoRender.display();
  });

  const updateToDoList = () => {
    updateDate()
    updateDescription()
    updateTitle()
  }


  const updateTitle = () => {
    
    let i = 0

    // Update the title
    for (const e of getToDoTitle()){
      toDoList[i].title = e.value
      i++
    }
  }

  const updateDate = () => {
    
    let i = 0

    // Update the title
    for (const e of getToDoDate()){
      toDoList[i].dueDate = e.value
      i++
    }
  }

  const updateDescription = () => {
    
    let i = 0

    // Update the title
    for (const e of getToDoDescription()){
      toDoList[i].description = e.value
      i++
    }
  }

  return { toDoList, appendToDo }
})();




// To Do Display Module
// ------------------------------------------------------------------
const toDoRender = (() => {

  const removeAllChildNodes = (ele) => {
    while (ele.firstChild){
      ele.removeChild(ele.firstChild);
    }; 
  };


  const renderDeleteButton = () => {
    toDoItem().forEach( e => {
      e.addEventListener('mouseover', () => {
        e.lastElementChild.classList.add("show");
      })

      e.addEventListener('mouseout', () => {
        e.lastElementChild.classList.remove("show")
      })
    })
  }


  const rendertoDoItem = (i) => {
    let title = i.title
    let description = i.description
    let dueDate = i.dueDate

    let toDoItem = document.createElement('div');

    toDoItem.innerHTML = 
      `
        <div class = "summary">
          <div class = "title-form"> <input type = "text" value = "${title}" class = "title"> </div>
          <div class = "date-form"> <input type = "date" value = "${dueDate}" class = "date"> </div>
        </div>

        <div class = "description">
          <input type = "text" value = "${description}" class = "description-form">
        </div>

        <div class = "delete"><i class="fas fa-trash-alt"></i></div>
      `      
    toDoItem.className += "to-do-item";

    return toDoItem;
  };

  const expandRetract = () => {
  
    // Show Content
    toDoSummary().forEach(e => {
      e.addEventListener('click', (el) => {
  
        if (el.target.classList.contains("summary")){
          if (e.nextElementSibling.style.display === 'block'){
            e.nextElementSibling.style.display = 'none'
          }else {
            e.nextElementSibling.style.display = 'block'
          };
        }
      });
    });
  };


  const display = () => {
      // Remove previously loaded to do items
    removeAllChildNodes(toDoItems());

    toDoController.toDoList.forEach( item => {        

      toDoItems().appendChild(rendertoDoItem(item));

    });
    expandRetract();
    renderDeleteButton();
  }

  return { display }
  
})();




