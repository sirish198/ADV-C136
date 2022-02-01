function setup() {
	canvas =  createCanvas(380,380);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('Model Loaded');
}
function start() 
{ 
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
     document.getElementById("status").innerHTML = "Status : Detecting Objects"; 
     object_name = document.getElementById("object_name").value; 
    }

    function draw(){
        image(video, 0, 0,380,380);
    }