let span = document.querySelector('#openNav');
span.addEventListener('click', () => {
   openNav();
});
function openNav() {
   document.getElementById("navSide").style.width = "300px";
   let opened = document.querySelector('#openNav');
   opened.id = "xBtn"
   opened.replaceWith(opened.cloneNode(true));
   addClose();
 }
 function closeNav() {
   document.getElementById("navSide").style.width = "0";
   let close = document.querySelector('#xBtn');
   close.id = "openNav"
   let menu = document.querySelector('#openNav');
   menu.replaceWith(menu.cloneNode(true));
   addOpen();
 }
function removed() {
   console.log('removed')
}
function addClose() {
   let closed = document.querySelector('#xBtn');
   closed.addEventListener('click', closeNav);
}
function addOpen() {
   let open = document.querySelector('#openNav');
   open.addEventListener('click', openNav);
}