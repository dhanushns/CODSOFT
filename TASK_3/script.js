document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
		  return;
		}
		entry.target.classList.remove('in-view');
	  });
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.animate');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

});

function expandDesc(event){
    let id = document.getElementById(event.target.id).parentElement.parentElement.id;
    document.getElementById(id).classList.toggle("toggle-desc");
    document.getElementById(event.target.id).classList.toggle("toggle-read-btn");
    var text = document.getElementById(event.target.id);
    console.log(text.innerText);
    if(text.innerText === "Read more"){
        text.innerText = "Read less"
    }
    else if(text.innerText === "Read less"){
        text.innerText = "Read more"
    }
}

function hire_btn(){
    let btn = document.getElementById('hm-btn');
    btn.style.backgroundColor = "rgb(237, 131, 55)";
    document.getElementById('hm').style.display = "inline-block"

    let btn_portfolio = document.getElementById('p-btn');
    btn_portfolio.style.backgroundColor = "transparent";
    document.getElementById('p').style.display = "none";
}

function portfolio_btn(){
    let btn = document.getElementById('hm-btn');
    btn.style.backgroundColor = "transparent";
    document.getElementById('hm').style.display = "none"

    let btn_portfolio = document.getElementById('p-btn');
    btn_portfolio.style.backgroundColor = "rgb(237, 131, 55)";
    document.getElementById('p').style.display = "inline-block";

}

function toggle_menu(){
    document.getElementById('menu').classList.toggle('toggle-menu-bar');
    let icon = document.getElementById('menu-list');
    if(icon.className === "bi bi-list"){
        icon.className = "bi bi-x";
    }
    else{
        icon.className = "bi bi-list";
    }
}