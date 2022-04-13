let myHeading = document.querySelector('h1');
let mybutton = document.querySelector('button');
/*myHeading.textContent = 'Hello world!';*/

let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mysrc = myImage.getAttribute('src');
    if (mysrc === "images/demo.jpg"){
        myImage.setAttribute('src',"images/demo1.png");
    }else{
        myImage.setAttribute('src',"images/demo.jpg");
    }
}


function setUserName(){
    let myName = prompt("please input your name:");
    if(!myName||myName===null){
        setUserName();
    }else{
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + ", Welcome!";
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storeName = localStorage.getItem('name');
    myHeading.textContent = storeName + ", Welcome!";
}

mybutton.onclick = function(){
    setUserName();
}