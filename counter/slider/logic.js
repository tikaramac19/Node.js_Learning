// simple slideshow logic

let i = 0; // start point
let images = [];
let time = 4000;

// list of the images
// i.e array values 

images[0] = './images/profile.jpg';
images[1] = './images/pic.jpg';
images[2] = "./images/tikuprofile.jpg";

// function for change the images

function changeImg(){
    document.slide.src = images[i];
    
    if(i < images.length - 1){
        i++;
    }
    else{
        i = 0;
    }

    setTimeout("changeImg()", time);

}
// we want the images change initially when the window reload
// so 

window.onload = changeImg;
