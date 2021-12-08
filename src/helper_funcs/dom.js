// Get to Do
export let toDoItems = () => {
  return document.querySelector('#to-do-items');
}


export let showOnClick = () => {
  let item = document.querySelectorAll(".summary");

  // Show Content
  item.forEach(e => {
    e.addEventListener('click', () => {
      e.nextElementSibling.style.display = 'block';
    });
  });
};