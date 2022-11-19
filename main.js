var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});


setTimeout(function()
{
    img_id = "selfie1";
    take_snapshot();
    speak_data = "Taking your selfie in next 10 seconds"
}
 
)



