// Function To Scroll Any Section
let allLinks = document.querySelectorAll('.links li a');

function scrollSmooth(elements) {
  elements.forEach((ele) => {
    ele.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
}
scrollSmooth(allLinks);

// Toggle Menu
let toggleBtn = document.querySelector('.toggle-menu'),
  tLinks = document.querySelector('.links');

toggleBtn.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle('toggle-active');
  tLinks.classList.toggle('open');
};
document.addEventListener('click', (e) => {
  if (e.target !== toggleBtn && e.target !== tLinks) {
    if (tLinks.classList.contains('open')) {
      toggleBtn.classList.toggle('toggle-active');
      tLinks.classList.toggle('open');
    }
  }
});
tLinks.onclick = function (e) {
  e.stopPropagation();
};
