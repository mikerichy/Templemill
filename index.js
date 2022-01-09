function openNav() {
    document.getElementById("navSide").style.width = "300px";
  }
  function closeNav() {
    document.getElementById("navSide").style.width = "0";
  }
const span = document.querySelector('#openNav');
span.addEventListener('click', () => {
  openNav();
});
const xBtn = document.querySelector('#xBtn');
xBtn.addEventListener('click', () => {
  closeNav();
});