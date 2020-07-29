


let eye = document.getElementById("eye");

window.addEventListener("mousemove", function (event) {
  let x = (event.clientX / (window.innerWidth * 2)) * 100;
  let y = (event.clientY / (window.innerHeight * 2)) * 100;
  x = Number(x.toFixed(1));
  y = Number(y.toFixed(1));

  console.log(x, y);

  eye.style.left = `${x}%`;
  eye.style.top = `${y}%`;
});



function openAbout() {

  document.getElementById("about-us").classList.toggle('active');
  document.getElementById("li-about").classList.toggle('active');


}

function closeAbout() {

  document.getElementById("about-us").classList.remove('active');
  document.getElementById("li-about").classList.remove('active');
  document.getElementById('rotate').classList.toggle('back');

}
