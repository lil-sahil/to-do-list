import { toDoItems,
         toDoItem, 
         toDoSummary, 
         addtoDoButton, 
         getToDoTitle,
         getToDoDate,
         getToDoDescription,
         toDoDelete,
         setPriority} from "../helper_funcs/dom.js";

import { projectController } from "./projects.js";



// To Do Factory
// ------------------------------------------------------------------

const createToDo = (project, title, description = 'Provide Description', dueDate = '2021-10-01', priority = 'low') => {
  return { project, title, description,dueDate, priority };
};



// To Do Controller Module
// ------------------------------------------------------------------

export const toDoController = (() => {

  // Initialize List
  let toDoList = [];


  // Current selected project

  


  const mainController = () => {
    updateToDoList();
    toDoRender.display();
    deleteButton();
  }

  // Push created to do list to list
  const appendToDo = (toDo) => {
    toDoList.push(toDo);
  };

  
  addtoDoButton.addEventListener('click', () => {
    appendToDo( createToDo(`${projectController.getCurrentSelectedProjectName()}`, "Enter Task") );
    mainController();      
  });
  

  // CLick event on window to update the list everytime the user clicks on the window.
  window.addEventListener('click', () => {
    updateToDoList();
    toDoRender.setPriorityClass();
  })

  const updateToDoList = () => {
    updateDate()
    updateDescription()
    updateTitle()
    updatePriority()
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

    // Update the date
    for (const e of getToDoDate()){
      toDoList[i].dueDate = e.value
      i++
    }
  }

  const updateDescription = () => {
    
    let i = 0

    // Update the description
    for (const e of getToDoDescription()){
      toDoList[i].description = e.value
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

  // Delete button functionality
  const deleteButton = () => {
    toDoDelete().forEach(e => {
      e.addEventListener('click', (el) => {

        deleteItem(el.path[2].querySelector('.summary > .title-form > input').value,
                   el.path[2].querySelector('.description > input').value)
        
        toDoRender.display()
        deleteButton();
      })
    })
  }


  const deleteItem = (title, description) => {
    console.log(title);
    console.log(description);
    
    toDoList = toDoList.filter(listItem => listItem.title !== title)
  }

  const getToDoList = () => {
    return toDoList
  }



  return { getToDoList, appendToDo }
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

  // const setPriority = (prioritySelection) => {

  // }


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

        
        if (opt.id === toDoController.getToDoList()[iter].priority){
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
    toDoController.getToDoList().forEach( item => {        

      toDoItems().appendChild(rendertoDoItem(item));
    });
  }



  const display = () => {
      // Remove previously loaded to do items
    removeAllChildNodes(toDoItems());

    displayEachItem();
    setPriorityClass();

    expandRetract();
    renderDeleteButton();
  }

  return { display, setPriorityClass }
  
})();




