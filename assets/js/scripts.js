/* 
  * Constants containing the elements of the sidebar
*/
const buttonCloseSidebar = document.querySelector('#button-close-sidebar');
const sidebar = document.querySelector('.sidebar');
const itemsList = document.querySelectorAll('.sidebar-item');

/* 
  * Function to adjust the sidebar when it is closed
*/
const adjustSidebarMin = () => {
  document.querySelector('.sidebar-logo').style.display = 'none';
  document.querySelector('.user').style.display = 'none';
  document.querySelector('.sidebar-header').style.justifyContent = 'center';
  document.querySelector('.sidebar-footer').style.justifyContent = 'center';
}

/* 
  * Function to adjust the sidebar when it is opned
*/
const adjustSidebarMax = () => {
  document.querySelector('.sidebar-logo').style.animation = 'openSidebar 1s';
  document.querySelector('.sidebar-logo').style.display = 'flex';
  document.querySelector('.user').style.animation = 'openSidebar 1s';
  document.querySelector('.user').style.display = 'flex';
  document.querySelector('.sidebar-header').style.justifyContent = 'space-between';
  document.querySelector('.sidebar-footer').style.justifyContent = 'space-between';
}

/* 
  * Function to close or open the sidebar
*/
buttonCloseSidebar.addEventListener('click', () => {
  if (sidebar.classList.contains('sidebar-close')) {
    sidebar.classList.remove('sidebar-close');
    sidebar.classList.add('sidebar-open');
    adjustSidebarMax();
  } else {
    sidebar.classList.add('sidebar-close');
    sidebar.classList.remove('sidebar-open');
    adjustSidebarMin();
  }
});

itemsList.forEach(item => {
  item.addEventListener('click', () => {
    itemsList.forEach(item => {
      item.classList.remove('item-active');
    });
    
    item.classList.add('item-active');
  });
});