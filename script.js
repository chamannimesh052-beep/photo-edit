let photo = document.getElementById("photo");
let upload = document.getElementById("upload");

upload.onchange = function(){
 photo.src = URL.createObjectURL(upload.files[0]);
}

function filter1(){ photo.style.filter = "grayscale(100%)"; }
function filter2(){ photo.style.filter = "brightness(150%)"; }
function filter3(){ photo.style.filter = "blur(3px)"; }
function reset(){ photo.style.filter = "
