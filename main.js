status = "";

function setup()
{
    canvas = createCanvas(340,200);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 340, 200);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    inputvalue = getElementById("objectname").value;
}

function modelLoaded()
{
    console.log("Model Loaded!")
    status = true;
}
