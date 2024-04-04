function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icons=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icons.classList.toggle("open");
}

function toggleBox(element) {
  var content = element.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
    element.textContent = "+";
  } else {
    content.style.display = "block";
    element.textContent = "-";
  }
}