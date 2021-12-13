// Get to Do
export let toDoItems = () => {
  return document.querySelector('#to-do-items');
}

// To do button
export let addtoDoButton = document.querySelector('.add-to-do > button');


export let showOnClick = () => {
  let item = document.querySelectorAll(".summary");

  // Show Content
  item.forEach(e => {
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


export let getToDoTitle = () => {
  return document.getElementsByClassName("title")
};

export let getToDoDate = () => {
  return document.getElementsByClassName("date")
};

export let getToDoDescription = () => {
  return document.getElementsByClassName("description-form")
};