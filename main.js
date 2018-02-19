const circle = document.querySelector(".circle");
const info = document.querySelector(".info");

const move = (e) => {
    console.log(e.keyCode)
    //37 leftside
    switch (e.keyCode) {
        case 37:
            circle.style.left = circle.offsetLeft - 4 + "px";
            break;
            
        case 38:
            circle.style.top = circle.offsetTop - 4 + "px";
            break;
            
        case 39:
            circle.style.right = circle.offset - 4 + "px";
            break;
            
        case 40:
            circle.style.bottom = circle.offsetbottom - 4 + "px";
            break;



        default:
            info.textContent = "klikniete"
    }

}

window.addEventListener("keydown", move)