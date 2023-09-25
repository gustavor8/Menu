const menuButton = document.getElementById('menu-button');
const container = document.querySelector('.container');
const menuItems = document.querySelectorAll('.menu-item');

let isExpand = true;

menuButton.addEventListener('click', () => {
  if(isExpand){
    container.classList.add('expand');
  }else{
    container.classList.remove('expand');
  }
  
  isExpand = !isExpand
})


menuItems.forEach((menuItem) => {
  let isArrowExpand = false;

  menuItem.addEventListener('click', () => {
    const arrow = menuItem.children[0].children[2];
  
    if (isArrowExpand) {
      menuItem.children[1].style.display = 'block';
      arrow.classList.add('arrow-expand');
    } else {
      menuItem.children[1].style.display = 'none';
      arrow.classList.remove('arrow-expand');
    }
    isArrowExpand = !isArrowExpand;

  });
});