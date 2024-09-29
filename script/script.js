const sidebar = document.querySelector('.sidebar');
const sidebar_left = document.querySelector('.sidebar-left');

sidebar.addEventListener('click' , ()=>{
    sidebar_left.classList.toggle('toggle');    
    sidebar.classList.add('open');
    sidebar.classList.toggle('close');
})