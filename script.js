let px = 0;
let py = 0;

let cx = width / 2;
let cy = height / 2;

let theta = 0.001;
let length = 30;

// Runs once at the beginning of the website
function Start() {}

// Runs every frame
function Update() {
	px = Math.cos(theta) * length + cx;
	py = Math.sin(theta) * length + cy;

	DrawCircle(cx, cy, 15, 'black');
	DrawCircle(px, py, 15, 'black');

	DrawLine(px, py, cx, cy, 'black');
}
