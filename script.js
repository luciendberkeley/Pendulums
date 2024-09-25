let px,
	py,
	cx,
	cy,
	theta,
	thetaR,
	length,
	PI,
	theta_0,
	time,
	speed,
	holdingIn,
	holdingOut,
	clickX,
	clickY;

// Runs once at the beginning of the website
function Start() {
	px = 0;
	py = 0;

	PI = Math.PI;

	cx = width / 2;
	cy = height / 2;

	length = 300;
	a_grav = 9.8;

	theta_0 = (3 * PI) / 2;
	time = 0;
	speed = 1;
	holdingOut = false;
	holdingIn = false;
	clickX = 0;
	clickY = 0;

	CreateSlider(50, 500, 250, "Length");
	CreateSlider(0, 100, 98, "Gravity");
	CreateSlider(0, 10, 1, "Speed");
}

function dist(x1, y1, x2, y2) {
	return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

// Runs every frame
function Update() {
	length = backendSliders["Length"].value;
	a_grav = backendSliders["Gravity"].value / 10;
	speed = backendSliders["Speed"].value;

	if (holdingOut) {
		theta_0 =
			Math.atan2(height - cy - clickY, clickX - cx) + PI / 2;
		time = 0;

		px = Math.cos(theta_0 + (3 * PI) / 2) * length + cx;
		py = Math.sin(theta_0 + (3 * PI) / 2) * length + cy;
	} else {
		let T = 2 * PI * Math.sqrt(length / a_grav);

		let angularFreq = (2 * PI) / T;
		let theta_t =
			theta_0 * Math.cos(angularFreq * time) + (3 * PI) / 2;
		time += deltaTime * speed * 10;

		px = Math.cos(theta_t) * length + cx;
		py = Math.sin(theta_t) * length + cy;
	}

	if (theta_0 > PI) {
		theta_0 = -(2 * PI - theta_0);
	}

	// Make sure to flip everything in the end.
	DrawLine(px, height - py, cx, height - cy, "black");

	DrawCircle(cx, height - cy, 15, "black");
	DrawCircle(px, height - py, 15, "red");
}

document.addEventListener("mousedown", (event) => {
	let x = event.x;
	let y = event.y;

	if (dist(x, y, px, height - py) <= 30) {
		holdingOut = true;
	}

	clickX = x;
	clickY = y;
});

document.addEventListener("mousemove", (event) => {
	clickX = event.x;
	clickY = event.y;
});

document.addEventListener("mouseup", (event) => {
	let x = event.x;
	let y = event.y;

	holdingOut = false;

	clickX = x;
	clickY = y;
});
