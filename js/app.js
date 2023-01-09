let arrow_left = document.getElementById("arrow_left");
let arrow_right = document.getElementById("arrow_right");

let img = document.getElementById("img_middle");
let img_left = document.getElementById("img_left");
let img_right = document.getElementById("img_right");

let imgs = ["img/image-slide-1.jpg", "img/image-slide-2.jpg", "img/image-slide-3.jpg", "img/image-slide-4.jpg", "img/image-slide-5.jpg"];

let i = 0;

img_right.src = imgs[4];
img.src = imgs[i];
img_left.src = imgs[i+1];

arrow_left.addEventListener("click", () => {
    i ++;
    if (i == imgs.length) {
        i = 0;
        img.src = imgs[i];
    }

    console.log(i);
    img.src = imgs[i];
    img_left.src = imgs[i+1];
    img_right.src = imgs[i-1];
});

arrow_right.addEventListener("click", () => {
    i --;
    if (i < 0) {
        i = 4;
        img.src = imgs[i];
    }

    console.log(i);
    img.src = imgs[i];
    img_left.src = imgs[i+1];
    img_right.src = imgs[i-1];
});