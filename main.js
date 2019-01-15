// JavaScript Document
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/photo.jpg') {
      myImage.setAttribute ('src','images/photo2.jpg');
    } else {
      myImage.setAttribute ('src','images/photo.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myButton.onclick = function() {
  setUserName();
}
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Hello, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Hello, ' + storedName;
}