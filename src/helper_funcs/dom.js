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
    e.addEventListener('click', () => {
      
      if (e.nextElementSibling.style.display === 'block'){
        console.log('here')
        e.nextElementSibling.style.display = 'none'
      }else {
        e.nextElementSibling.style.display = 'block'
      };
    });
  });
};