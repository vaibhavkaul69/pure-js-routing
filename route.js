window.onload = function () {
	console.log(window.location);
};
const root = document.getElementById("root");

//Add an event listener to all route text;
const list = document.querySelectorAll("li");
[...list].map((item) => {
	item.addEventListener("click", function () {
		createRoute("/" + this.textContent);
	});
});

const home_route = `<div class="jumbotron bg-primary mt-5">
<h1 class="text-center">Homepage</h1>
</div>`;
const about_route = `<div class="jumbotron bg-danger text-white mt-5">
<h1 class="text-center">About Page</h1>
</div>`;
const contact_route = `<div class="jumbotron bg-success mt-5">
<h1 class="text-center">Contact Page</h1>
</div>`;

//A route table onject to map the current route name to it's content
const route_table = {
	Home: home_route,
	About: about_route,
	Contact: contact_route,
};

//This functin will set the content in the body as per the current route.
//This will be called when we click on the links in navbar.
//With every click the current state gets changed and content is updated.
function createRoute(route) {
	console.log(route);
	const new_route = route.replace("/", "");

	//pushState method of history object just pushes the new state to current one and changes the current route in the url.
	//Basically it pushes the current state to the history stack.
	//It will not let browser to make a server call for current URL until you refresh the current window.
	window.history.pushState(
		{ route: new_route, id: Math.random() * 3 },
		new_route,
		new_route
	);
	root.innerHTML = route_table[new_route];
}

//Whenever the state changes like if we go back and forth in a window of browser this event gets triggered

window.onpopstate = function () {
	console.log(window.location.pathname);
	root.innerHTML = route_table[window.location.pathname.replace("/", "")];
};
