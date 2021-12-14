// Get to Do
export let toDoItems = () => {
  return document.querySelector('#to-do-items');
}

// To do button
export let addtoDoButton = document.querySelector('.add-to-do > button');


export let toDoSummary = () => {
  return document.querySelectorAll(".summary");
}

export let toDoItem = () => {
  return document.querySelectorAll('.to-do-item');
}


export let getToDoTitle = () => {
  return document.getElementsByClassName("title")
};

export let getToDoDate = () => {
  return document.getElementsByClassName("date")
};

export let getToDoDescription = () => {
  return document.getElementsByClassName("description-form")
};

export let toDoDelete = () => {
  return document.querySelectorAll('.to-do-item > .delete');
};