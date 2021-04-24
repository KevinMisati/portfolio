// ====================Navigational Menu===================*/

const navToggle = document.querySelector(".nav_toggle");
const navLinks = document.querySelectorAll(".nav_link");

const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link3= document.querySelector(".link3");
const link4 = document.querySelector(".link4");

navToggle.addEventListener("click", function () {
  document.body.classList.toggle("nav_open");
});

for (let i=0;i<navLinks.length;i++){
   navLinks[i].addEventListener("click", () => {
     document.body.classList.remove("nav_open");
   });
}

