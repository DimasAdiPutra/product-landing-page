// navbar
const toggle = document.getElementsByClassName('toggle')[0];
const navbar = document.getElementById('nav-bar');
const navlinks = document.getElementsByClassName('nav-link');

toggle.addEventListener('click', function (e) {
  this.classList.toggle('on');
  navbar.classList.toggle('active');
});

for (let i = 0; i < navlinks.length; i++) {
  const e = navlinks[i];
  e.addEventListener('click', function () {
    for (let i = 0; i < navlinks.length; i++) {
      const el = navlinks[i];
      if (el.classList.contains('here')) {
        el.classList.remove('here');
      }
    }
    e.classList.toggle('here');
  });
}