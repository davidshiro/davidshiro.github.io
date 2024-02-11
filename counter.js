const counter = document.getElementById('counter_number');
var count = 0;

counter.innerHTML = count;

function plus() {
	count++;
	counter.innerHTML = count;
}

function minus() {
	count--;
	counter.innerHTML = count;
}