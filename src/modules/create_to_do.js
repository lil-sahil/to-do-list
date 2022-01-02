import { toDoItems,
         toDoItem, 
         toDoSummary, 
         addtoDoButton,
         toDoDelete,
         setPriority} from "../helper_funcs/dom.js";

import { projectController } from "./projects.js";

import { dataController } from "./data.js";


const createToDo = (project, title, description = 'Provide Description', dueDate = '2021-10-01', priority = 'low') => {
  return { project, title, description,dueDate, priority };
};


// To Do Controller Module
// ------------------------------------------------------------------

export const toDoController = (() => {

  // Event Listners
  addtoDoButton.addEventListener('click', () => {
    appendToDo( createToDo(`${projectController.getCurrentSelectedProjectName()}`, "Enter Task") );
    toDoRender.display();
  });
  

  // CLick event on window to update the list everytime the user clicks on the window.
  window.addEventListener('click', () => {
    dataController.updateToDoList();
    toDoRender.setPriorityClass();
  })


  // Push created to do list to list
  const appendToDo = (toDo) => {
    dataController.getToDoList().push(toDo);
  };
 

  // Delete button functionality
  const deleteButton = () => {
    toDoDelete().forEach(e => {
      e.addEventListener('click', (el) => {

        deleteItem(el.path[2].querySelector('.summary > .title-form > input').value)
        
        toDoRender.display()
        deleteButton();
      })
    })
  }


  const deleteItem = (title) => {
    let newList = dataController.getToDoList().filter(listItem => listItem.title !== title)
    
    dataController.updateArray(newList)  
  }

  return { appendToDo, deleteButton }
})();




// To Do Display Module
// ------------------------------------------------------------------
export const toDoRender = (() => {

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

        <div class = "priority">

          <form>
            <input type="radio" id="high" name="priority" value="high">
            <label for="high">High</label><br>

            <input type="radio" id="low" name="priority" value="low">
            <label for="low">Low</label><br>
          </form>
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


  const setPriorityClass = () => {

    toDoItems().childNodes.forEach( (value, iter) => {
      
      setPriority(value).forEach( opt => {

        
        if (opt.id === dataController.getToDoList()[iter].priority){
          opt.checked = true;
          if (opt.id === 'high'){
            value.classList.add('high-priority');
          }else {
            value.classList.remove('high-priority');
          }
        }
      })
    })
  }

  const displayEachItem = () => {
    removeAllChildNodes(toDoItems());

    dataController.getToDoList().forEach( item => {
      
      if (item.project === projectController.getCurrentSelectedProjectName()){
        toDoItems().appendChild(rendertoDoItem(item));
      }

    });
  }


  const display = () => {

    displayEachItem();
    setPriorityClass();
    expandRetract();
    renderDeleteButton();
    toDoController.deleteButton()
  }

  return { display, setPriorityClass }
  
})();




