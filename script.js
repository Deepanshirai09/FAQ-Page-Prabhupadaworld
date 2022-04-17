let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.searchbar-container');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
window.onscroll=()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  }
  menu.addEventListener('click', () =>{
      menu.classList.toggle('fa-times');
      navbar.classList.toggle('active');
  });
  searchBtn.addEventListener('click', () =>{
      searchBtn.classList.toggle('fa-times');
      searchBar.classList.toggle('active');
  });
  var swiper = new Swiper(".book-slider", {
      spaceBetween:20,
      loop:false,
      autoplay:{
          delay:2500,
          disableOnInteraction: false,
      },
      breakpoints:
      {
          170:{
              slidesPerView: 2,
          },
          330:{
              slidesPerView: 3,
          },
          500: {
              slidesPerView: 4,
          },
          670: {
              slidesPerView: 5,
          },
          850: {
              slidesPerView: 6,
          },
          1024: {
              slidesPerView: 7,
          },
          1200: {
              slidesPerView: 8,
          },
      },
  });
