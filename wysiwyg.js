var persons = [
	{
	  title: "Samurai",
	  name: "Tomoe Gozen-1",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	{
	  title: "Samurai",
	  name: "Tomoe Gozen-2",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	{
	  title: "Samurai",
	  name: "Tomoe Gozen-3",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	{
	  title: "Samurai",
	  name: "Tomoe Goze-4",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	{
	  title: "Samurai",
	  name: "Tomoe Gozen-5",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	{
	  title: "Samura",
	  name: "Tomoe Gozen-6",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	}
];
var bodyEmt = document.getElementsByTagName("body");
var textInputEmt = document.createElement("textarea");
bodyEmt[0].appendChild(textInputEmt);
console.log(bodyEmt[0]);
var containerEmt = document.createElement("div");
bodyEmt[0].appendChild(containerEmt);
for (var i = 0; i < persons.length; i++){

	// set up DOM
	var personEmt = document.createElement("person");
	var headerEmt = document.createElement("header");
	headerEmt.innerHTML = persons[i].name + "," + persons[i].title;
	var sectionEmt = document.createElement("section");
	sectionEmt.innerHTML = persons[i].bio;
	var footerEmt = document.createElement("footer");
	footerEmt.innerHTML = "Birth: " + persons[i].lifespan.birth + ", death: " + persons[i].lifespan.death;
	personEmt.appendChild(headerEmt);
	personEmt.appendChild(sectionEmt);
	personEmt.appendChild(footerEmt);
	containerEmt.appendChild(personEmt);

	// add event listener to person element for click
	personEmt.addEventListener("click", function(e1){
		targetEmt = this.childNodes[1];
		this.className = "showBorder";
    textInputEmt.value = targetEmt.innerHTML;
		textInputEmt.focus();
		textInputEmt.addEventListener("keyup", inputText);
	});

	// add event listener to person element for mouseout
	personEmt.addEventListener("mouseout", function(){
		this.className = "";
	});
}

//  function to synchronize input box with person element
function inputText(e2) {
	e2.preventDefault();
	targetEmt.innerHTML = this.value;
	if(e2.keyCode === 13){				
		this.blur();
		this.value = "";
		textInputEmt.removeEventListener("keyup", inputText);
	}
}





