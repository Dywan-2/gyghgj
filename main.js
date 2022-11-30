
function startai(){
    navigator.mediaDevices.getUserMedia({audio:true});
    var model=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/liJmMbbJ3/",modelloaded);
}
function modelloaded(){
    model.classify(gotresults);
}
function gotresults(error,results){
    if(error){
        console.error(error)
    }else{
        console.log("Got result");
        var r=Math.floor(Math.random() *255)+1;
        var g=Math.floor(Math.random() *255)+1;
        var b=Math.floor(Math.random() *255)+1;
        document.getElementById("sound").innerHTML='I can hear - '+results[0].label
        document.getElementById("sound").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("accuracy").innerHTML='accuracy - '+(results[0].confidence*100).toFixed(2)+'%';
        document.getElementById("accuracy").style.color="rgb("+r+","+g+","+b+")";
        var img=document.getElementById("im1");

        if(results[0].label=="bark"){
            img.src = 'doge.webp';
        }else if(results[0].label=="meow"){
            img.src = 'pop.png';
        }else if(results[0].label=="bruh"){
            img.src = 'huh.png';
    }else{
        img.src = 'background.png';
    }
    }
}
