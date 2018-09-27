document.addEventListener('scroll', function (e) {
   let nav = document.getElementById('nav');
   let logo = document.getElementsByClassName('logo')[0];
   let navList = document.getElementById('nav-list');

   let yPos = body.getBoundingClientRect().y;

   if(yPos < -10) {
      nav.classList.add('scrolling');
      navList.style.padding= '5px 18px';
      logo.style.width = '340px';

   }else{
      nav.classList.remove('scrolling');
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
   let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
   window.scrollTo({
      top: h-60,
      left: 0,
      behavior: 'smooth'
   });
}

let isScrolled = function (el){
   if(!el) return false;
   let rect = el.getBoundingClientRect()
   let elTop = rect.top;
   let isVisible = elTop - window.innerHeight <= 0;

   return isVisible;
}

document.addEventListener('scroll', function(){
   let feed = document.getElementsByClassName('feed-container')[0];
   let feedIS = false;

   if(isScrolled(feed) && !feedIS){
      feed.classList.add('scrolled');
      feedIS = true;
   }

});

