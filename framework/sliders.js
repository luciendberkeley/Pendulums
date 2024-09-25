let backendSliders = {};

function CreateSlider(min, max, value, id) {
	let element = document.createElement("input");
	element.type = "range";
	element.min = min;
	element.max = max;
	element.value = value;
	document.body.appendChild(element);
	backendSliders[id] = {
		min: min,
		max: max,
		value: value,
		element: element,
	};
}

function UpdateSliders() {
	for (const key in backendSliders) {
		backendSliders[key].value = backendSliders[key].element.value;
	}
}
