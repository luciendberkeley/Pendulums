let backendSliders = {};

function CreateSlider(min, max, value, id) {
	let element = document.createElement("input");
	let text = document.createElement("h3");
	let div = document.createElement("div");
	let container = document.querySelector(".sliders");
	div.id = id;
	div.style = "flex: 1;";
	text.innerText = id;
	element.type = "range";
	element.min = min;
	element.max = max;
	element.value = value;
	div.appendChild(element);
	div.appendChild(text);
	container.appendChild(div);
	backendSliders[id] = {
		min: min,
		max: max,
		value: value,
		text: text,
		element: element,
	};
}

function UpdateSliders() {
	for (const key in backendSliders) {
		backendSliders[key].value = backendSliders[key].element.value;
	}
}
