document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})








document.getElementById("schedules").addEventListener("click", function () {
    const currentScroll = window.scrollY;
    const targetScroll = window.innerHeight;

    if (currentScroll < targetScroll - 10 || currentScroll > targetScroll + 10) {
        // Scroll to 100vh only if not already there
        window.scrollTo({
            top: targetScroll,
            behavior: "smooth"
        });
    }
	document.getElementById("over_over").scrollTo({
        top: 0, 
        behavior: "smooth" // Smooth scrolling effect
    });
});


document.getElementById("faqs").addEventListener("click", function () {
	const currentScroll = window.scrollY;
    const targetScroll = window.innerHeight+20;

    if (currentScroll < targetScroll - 10 || currentScroll > targetScroll + 10) {
        // Scroll to 100vh only if not already there
        window.scrollTo({
            top: targetScroll,
            behavior: "smooth"
        });
    }
    document.getElementById("over_over").scrollBy({
        top: document.getElementById("over_over").scrollHeight, // Adjust the value as needed
        behavior: "smooth"
    });
});





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


