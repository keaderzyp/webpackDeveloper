var scripts = document.querySelectorAll("script");
var hmr = document.createElement("script");
hmr.src = '/socket.io/socket.io.js';
document.body.insertBefore(hmr,scripts[0]);
window.onload=()=>{
	var socket = io.connect();
	socket.on('refresh',res =>{if(res.success) {location.reload()}});
}