prediction1 = "";
prediction2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 100
})
Webcam.attach("#camera")


function takesnap() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}


console.log(ml5.version)

classifier=ml5.imageClassifier ("",modelLoaded)

function modelLoaded(){

console.log("modelconnected")

}