
var last_position_x, last_position_y;

canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

color = "black";

width_of_line = 4;

new_width = screen.width - 70;
new_height = screen.height - 100;

width = screen.width

if (width < 992) {
    document.getElementById("myCanvas").width = new_width
    document.getElementById("myCanvas").height = new_height
    document.body.style.overflow = "hidden"
}




canvas.addEventListener("touchstart", mytouchstart);

function mytouchstart(e) {



    color = document.getElementById("color").value;

    width_of_line = document.getElementById("linew").value;


    last_position_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_y = e.touches[0].clientY - canvas.offsetTop;


}

canvas.addEventListener("touchmove", mytouchmove);

function mytouchmove(e) {

    var current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;

    var current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

    color = document.getElementById("color").value;

    width_of_line = document.getElementById("linew").value;

    ctx.beginPath()
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    ctx.moveTo(last_position_x, last_position_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();

    last_position_x = current_position_of_mouse_x
    last_position_y = current_position_of_mouse_y


}









function Cleararea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)


}







