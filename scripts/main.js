var bannerImage = document.querySelector('img');
var imageFiles = ['banner1.jpg', 'banner2.jpg', 'banner3.jpg'];
var imageCounter = 0; 

bannerImage.onclick = function() {
	var mySrc = bannerImage.getAttribute('src');

	if (imageCounter === imageFiles.length - 1) {
		imageCounter = 0;
	} else {
		imageCounter++;
	}

	bannerImage.setAttribute('src', 'images/' + imageFiles[imageCounter]);
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Greetings, ' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Greetings, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}