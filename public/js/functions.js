document.addEventListener('scroll', function (e) {
   let nav = document.getElementById('nav');
   let logo = document.getElementsByClassName('logo')[0];
   let navList = document.getElementById('nav-list');

   let yPos = body.getBoundingClientRect().y;

   if(yPos < -10) {
      nav.style.backgroundColor = '#0D1323';
      nav.style.height = '60px';
      navList.style.padding= '5px 18px';
      logo.style.width = '340px';

   }else{
      nav.style.backgroundColor = '';
      nav.style.height = '62px';
      navList.style.padding= '10px 18px';
      logo.style.width = '350px';
   }
});

function burgerToggle(el) {
   el.classList.toggle('open');
   el.parentNode.childNodes[3].classList.toggle('activate');
   el.parentNode.parentNode.classList.toggle('open-burger');
}

function scroller(el) {
   console.log('swag');
   let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
   window.scrollTo({
      top: h-60,
      left: 0,
      behavior: 'smooth'
   })
}