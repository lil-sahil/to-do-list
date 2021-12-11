// Get to Do
export let toDoItems = () => {
  return document.querySelector('#to-do-items');
}


export let showOnClick = () => {
  let item = document.querySelectorAll(".summary");

  // Show Content
  item.forEach(e => {
    e.addEventListener('click', () => {
      
      if (e.nextElementSibling.style.display === 'block'){
        console.log('here')
        e.nextElementSibling.style.display = 'none'
      }else if (e.nextElementSibling.style.display === 'none'){
        console.log('here')

        e.nextElementSibling.style.display = 'block'
      };
    });
  });
};