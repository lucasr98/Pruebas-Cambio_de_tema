// TEMA DIURNO/NOCTURNO //

const logo = document.getElementById("logo"),
vector = document.querySelector(".vector"),
button = document.querySelector(".text_container"),
link = document.querySelector(".text"),
body = document.getElementById("body");

const switchButton = document.getElementById("switch"),
control = document.querySelector(".control"),
sun = document.getElementById("sun"),
moon = document.getElementById("moon");

let contadorSwitch = 0;

function switchFunction(){
	if (contadorSwitch == 0){
		switchButton.style.backgroundColor = "rgba(60, 60, 60, 1.0)";
		switchButton.style.justifyContent = "left";
		control.style.backgroundColor = "rgba(60, 60, 60, 1.0)";
		moon.style.display = "none";
		sun.style.display = "flex";
		body.style.backgroundColor = "var(--color2)";
		logo.style.backgroundColor = "var(--color2)";
		vector.style.filter = " invert(26%) sepia(6%) saturate(1771%) hue-rotate(159deg) brightness(92%) contrast(87%)";
		link.classList.add("text_2")
		link.classList.remove("text")
		button.classList.remove("text_container")
		button.classList.add("text_container_2")
		contadorSwitch = 1;
	}
	else{
		switchButton.style.removeProperty("background-color");
		switchButton.style.removeProperty("justify-content");
		control.style.removeProperty("background-color");
		moon.style.display = "flex";
		sun.style.display = "none";
		body.style.removeProperty("background-color");
		logo.style.removeProperty("background-color");
		vector.style.removeProperty("filter");
		link.classList.add("text")
		link.classList.remove("text_2")
		button.classList.add("text_container")
		button.classList.remove("text_container_2")
		contadorSwitch = 0;
	}
}

switchButton.addEventListener("click", switchFunction, true);

// TEMA DIURNO/NOCTURNO //