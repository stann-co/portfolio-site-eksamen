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

document.addEventListener("scroll", evt => {
	let scroll = root.scrollTop;
	root.style.setProperty("--scrolltop", scroll);

	activeCircle();
});

window.onload = async (event) => {
	activeCircle();
};
