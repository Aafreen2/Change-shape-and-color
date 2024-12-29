let round = document.querySelector(".round");
let btn = document.querySelectorAll("button");
let shape = document.querySelector("#square");

// to change the color
btn[0].addEventListener('click',changeColor);

function generateColor(){
    let color = Math.floor(Math.random() * 255);
  
    return color;
}

function changeColor(){
    let newColor = `rgb(${generateColor()},${generateColor()},${generateColor()})`;  
    round.style.backgroundColor = newColor; // 
}

// to change the shape
btn[1].addEventListener('click',changeShape);
let arr = ["square" , "round" , "diamond" , "triangle" , "arrow" , "frame" , "star" ,"cross", "left-point", "right-point","parallal","cheg"];
 
function randomShape(){
    let idx = Math.floor(Math.random() * arr.length);
 

    return arr[idx]; 
}

// Purpose: To change the shape of an element dynamically by modifying its id
function changeShape(){
    let idname = randomShape(); 
    shape.id = idname;  
}