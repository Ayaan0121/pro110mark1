function change(){
    random_r= Math.floor(Math.random()* 255 ) + 1;
    random_g= Math.floor(Math.random()* 255 ) + 1;
    random_b= Math.floor(Math.random()* 255 ) + 1;
    document.getElementById("result_emotion_name").style.color="rgb(" + random_r + ","+ random_g + ","+ random_b + ")";
    document.getElementById("cap").style.color="rgb(" + random_r + ","+ random_g + ","+ random_b + ")";
    document.getElementById("snap").style.color="rgb(" + random_r + ","+ random_g + ","+ random_b + ")";
    document.getElementById("headingas").style.backgroundColor="rgb(" + random_r + ","+ random_g + ","+ random_b + ")";
    document.getElementById("headingas").style.color="white";
    document.getElementById("bucap").style.backgroundColor="rgb(" + random_r + ","+ random_g + ","+ random_b + ")";
    document.getElementById("buch").style.backgroundColor="rgb(" + random_r + ","+ random_g + ","+ random_b + ")";
    document.getElementById("camera").style.border="2px dashed black";
    document.getElementById("result").style.border="2px dashed black";

}