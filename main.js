// Image swap
let myImage = document.querySelector('img'); // reference to the img

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src'); // reference to the img src 
    if(mySrc === 'images/firefox-icon.png'){ // Checks to see if img src matches default file path
        myImage.setAttribute('src','images/supreme.jpg'); // if so, update image src file path
    } else {
        myImage.setAttribute('src','images/firefox-icon.png'); // changes img back to defualt if its something else. 
    }
}


//personal greeting
let myButton = document.querySelector('button') // reference for the button 
let myHeading = document.querySelector('h1'); // reference to h2 


function setUserName() {
    let myName = prompt('Please enter your name.'); // promps website visitor to enter name 
    if(!myName) { // checks to see if name data exists
      setUserName(); // if not, run setUserName function
    } else { 
      localStorage.setItem('name', myName); // if name data exists, store it in variable 'name' using local storage. Im still unsure about this one
      myHeading.innerHTML = 'Mozilla is cool, ' + myName; // updates website's greeting using myName 
    }
  }

// Checks to see if name data exists, if not the setUserName function is called to create it
if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name'); 
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName; 
}

// Change User Button
myButton.onclick = function(){
    setUserName(); 
}