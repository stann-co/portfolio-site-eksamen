let root = document.documentElement;
let anchorLinks = document.querySelectorAll(".anchor-link");
let anchorCircles = document.querySelectorAll(".circles > a");
let activeAnchor = 0;

function activeCircle(){
	activeAnchor = -1;
	anchorLinks.forEach(link => {
		let linkPos = link.getBoundingClientRect().top;
		if(linkPos - 300 < 0){
			activeAnchor++;
		}
	});
	activeAnchor = Math.max(activeAnchor, 0);
	
	anchorCircles.forEach((circle, index) => {
		if(index === activeAnchor){
			circle.classList.add("active");
		} else {
			circle.classList.remove("active");
		}
	});
}

function parralaxBackgrounds(){
	let lines = document.querySelector("#lines-pattern");
	let circle1 = document.querySelector("#circle1-pattern");

	let circleRotator = document.querySelector("#circle-rotator");

	lines.setAttribute("y", root.scrollTop * -0.5);
	circle1.setAttribute("y", root.scrollTop * -0.6);

	circleRotator.setAttribute("transform", `rotate(${root.scrollTop * 0.05} 400 400)`);
}

document.addEventListener("scroll", evt => {
	let scroll = root.scrollTop;
	root.style.setProperty("--scrolltop", scroll);

	activeCircle();
	parralaxBackgrounds();
});

window.onload = async (event) => {
	activeCircle();
};

function toggleDarkmode() {
  document.documentElement.classList.toggle("dark-mode");
} 
