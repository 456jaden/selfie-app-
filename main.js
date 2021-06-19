var SpeechRecognition = window.webkitSpeechRecognition;


var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";

    recognition.start();

}
recognition.onresult = function(event){
    console.log(event);

var content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = content;
    console.log(content);

    if(content == "take my selfie"){
        console.log("taking selfie");
        speak();
    }
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = "taking selfie in 5 seconds";



    var utter = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utter);
    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
    },5000);
}


camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="selfieimg" src=" '+data_uri+'">';
    })

}
function savephoto(){
    link=document.getElementById("link");
    img=document.getElementById("selfieimg").src;
    link.href=img;
    link.click();

}