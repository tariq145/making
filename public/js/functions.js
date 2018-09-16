// Handles scrolling style for navbar
document.addEventListener('scroll', function (e) {
   let nav = document.getElementById('nav');
   let logo = document.getElementsByClassName('logo')[0];
   let navList = document.getElementById('nav-list');

   let yPos = body.getBoundingClientRect().y;

   if(yPos < -10) {
      nav.style.backgroundColor = '#0D1323';
      nav.style.height = '47px';
      navList.style.padding= '5px 18px';
      logo.style.width = '340px';

   }else{
      nav.style.backgroundColor = '';
      nav.style.height = '50px';
      navList.style.padding= '10px 18px';
      logo.style.width = '350px';
   }
});

function burgerToggle(el, test) {
   el.classList.toggle('open');
   el.parentNode.childNodes[3].classList.toggle('activate')
}