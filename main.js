leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poseNet',gotPoses);
}

function draw()
{
    background('#98FB98');
    textSize(20);
    fill('#000000');
    text('Kaviyashree',30,300);

}

function modelLoaded()
{
    console.log('PoseNet Is Initialized!');
}

function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        textSize(difference);
    }
}