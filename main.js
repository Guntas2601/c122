function setup(){

canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.size(550,500);
PoseNet=ml5.poseNet(video,modelloaded)
PoseNet.on("pose",gotposes);


}
function modelloaded(){

console.log ("posenet is initialised");

}
function gotposes(results){
    if(results.length > 0);
    {
        console.log (results);
    }
}