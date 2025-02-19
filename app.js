document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})








function scrollToSection() {
    document.getElementById("view").scrollIntoView({ behavior: "smooth" });
}
function scrollToSection2() {
    document.getElementById("view2").scrollIntoView({ behavior: "smooth" });
}





$(document).ready(function() {
	$("#chaingestyle").click(function() {
		let box = $(".navbar");
		let currentRight = box.css("right");

		if (currentRight === "0px") {
			box.css("right", "130%");
		} else {
			box.css("right", "0");
		}
	});
});


