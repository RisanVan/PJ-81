canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStlye = "grey";
ctx.lineWidth = 4;
ctx.rect(150,143,430,200);
ctx.stroke();


ctx.beginPath();
ctx.strokeStlye = "blue";
ctx.lineWidth = 5;
ctx.arc(250,210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStlye = "black";
ctx.lineWidth = 5;
ctx.arc( 350,210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStlye = "red";
ctx.lineWidth = 5;
ctx.arc( 450,210,40,0,2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStlye = "yellow";
ctx.lineWidth = 5;
ctx.arc( 300,250,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStlye = "green";
ctx.lineWidth = 5;
ctx.arc( 400,250,40,0,2 * Math.PI);
ctx.stroke();