var canvas=document.getElementById("Canvas");
var ctx=canvas.getContext("2d"),b_canvas,car1,car1x=390,car1y=280,car2x=340,car2y=280,car2,down1,down2,left1,left2,up1,up2,right1,right2,on="on";
winner=false;
function load(){
    b_canvas=new Image();
    b_canvas.onload=uploadBG;
    b_canvas.src="cb.jpg";

    car1=new Image();
    car1.onload=uploadCar1;
    car1.src="Car1.png";

    car2=new Image();
    car2.onload=uploadCar2;
    car2.src="Car2.png";
}

function uploadBG(){
    ctx.drawImage(b_canvas,0,0,canvas.width,canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1,car1x,car1y,40,204);
}
function uploadCar2(){
    ctx.drawImage(car2,car2x,car2y,40,204);
}
function upload(){
    uploadBG();
    uploadCar1();
    uploadCar2();
}
function Key_down(key_down){
    if(key_down.keyCode==37){
        if(car1x<=0){
            left1="off";
        }
        else{
            left1="on";
        }
    }
    if(key_down.keyCode==38){
        if(car1y<=0){
            document.getElementById('winner').textContent="Red car";
            play();
            up1="off";
            up2="off";
            right1="off";
            right2="off";
            left1="off";
            left2="off";
            down1="off";
            down2="off";
        }
        else{
            up1="on";
        }
    }
    if(key_down.keyCode==39){
        if(car1x>=1330){
            right1="off";
        }
        else if(car1x<=1330){
            right1="on";
        }
    }
    if(key_down.keyCode==40){
        if(car1y>=285){
            down1="off";
        }
        else{
            down1="on";
        }
    }
    if(key_down.keyCode==65){
        if(car2x<=0){
            left2="off";
        }
        else{
            left2="on";
        }
    }
    if(key_down.keyCode==87){
        if(car2y<=0){
            document.getElementById('winner').textContent="Blue car";
            play();
            up1="off";
            up2="off";
            right1="off";
            right2="off";
            left1="off";
            left2="off";
            down1="off";
            down2="off";
        }
        else{
            up2="on";
        }
    }
    if(key_down.keyCode==68){
        if(car2x>=1330){
            right2="off";
        }
        else if(car2x<=1330){
            right2="on";
        }
    }
    if(key_down.keyCode==83){
        if(car2y>=285){
            down2="off";
        }
        else{
            down2="on";
        }
    }
    check();
}
function Key_up(key_down){
    if(car1y<=0){
        document.getElementById('winner').textContent="Red car";
        play();
        up1="off";
        up2="off";
        right1="off";
        right2="off";
        left1="off";
        left2="off";
        down1="off";
        down2="off";
    }
    if(car2y<=0){
        document.getElementById('winner').textContent="Blue car";
        play();
        up1="off";
        up2="off";
        right1="off";
        right2="off";
        left1="off";
        left2="off";
        down1="off";
        down2="off";
    }
    if(key_down.keyCode==37){
        left1="off";
    }
    if(key_down.keyCode==38){
        up1="off";
    }
    if(key_down.keyCode==39){
        right1="off";
    }
    if(key_down.keyCode==40){
        down1="off";
    }
    if(key_down.keyCode==65){
        left2="off";
    }
    if(key_down.keyCode==87){
        up2="off";
    }
    if(key_down.keyCode==68){
        right2="off";
    }
    if(key_down.keyCode==83){
        down2="off";
    }
}
function check(){
    if(left1==on){
        car1x-=5;
        upload();
    }
    if(up1==on){
        car1y-=5;
        upload();
        if(car1y<=0){
            document.getElementById('winner').textContent="Red car";
            play();
            winner=true;
            up1=off;
            up2=off;
            right1=off;
            right2=off;
            left1=off;
            left2=off;
            down1=off;
            down2=off;
        }
    }
    if(right1==on){
        car1x+=5;
        upload();
    }
    if(down1==on){
        car1y+=5;
        upload();
    }
    if(left2==on){
        car2x-=5;
        upload();
    }
    if(up2==on){
        car2y-=5;
        upload();
        if(car2y<=0){
            document.getElementById('winner').textContent="Blue car";
            play();
            winner=true;
            up1=off;
            up2=off;
            right1=off;
            right2=off;
            left1=off;
            left2=off;
            down1=off;
            down2=off;
        }
    }
    if(right2==on){
        car2x+=5;
        upload();
    }
    if(down2==on){
        car2y+=5;
        upload();
    }
}
function play(){
    document.getElementById("sound").play();
}
window.addEventListener('keydown', Key_down);
window.addEventListener('keyup', Key_up);