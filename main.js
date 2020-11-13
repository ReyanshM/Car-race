var canvas=document.getElementById("Canvas");
var ctx=canvas.getContext("2d"),b_canvas,c1,c2;
function load(){
    b_canvas=new Image();
    b_canvas.onload=
    ctx.drawImage(b_canvas,0,0,ctx.canvas.width,ctx.canvas.height);
    b_canvas.src=C_back;
    c1=new Image();
    c1.onload=
    ctx.drawImage(c1,80,5,120,70);
    c1.src=Car1;
    c2=new Image();
    c2.onload=
    ctx.drawImage(c2,5,5,120,70);
    c2.src=Car2;
}
function Key_down(key_down){
    if(key_down.keyCode==37){
        if(e.shiftKey=true){
            alert("ghhjj");
        }
    }
}
window.addEventListener('keydown', Key_down)