console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


let catPic = document.querySelector('#cat-pic');

catPic.addEventListener('mouseover', () => alert(`You're as cute as she is <3`))