const h1 = document.querySelector(".hello h1")

function handleMouseenter(){
    h1.style.color = "pink";
    h1.innerText = "Mouse is here!";
}
function handleMouseLeave(){
    h1.style.color = "cornflowerBlue";
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    h1.style.color = "DarkSalmon";
    h1.innerText = "You just resized!";
}
function handleRightPointer(){
    h1.style.color = "DackOrchid";
    h1.innerText = "You clicked right pointer!"
}

h1.addEventListener("mouseenter",handleMouseenter);
h1.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("contextmenu", handleRightPointer);
