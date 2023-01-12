let arrow_left = document.getElementById("arrow_left");
let arrow_right = document.getElementById("arrow_right");

let img = document.getElementById("img_middle");

let i = 1;

arrow_left.addEventListener("click", () => {
    i++;
    if (i > 5) {
        i = 1;
        img.src = `img/image-slide-${i}.jpg`;
    } else {
        img.src = `img/image-slide-${i}.jpg`;
    }
});

arrow_right.addEventListener("click", () => {
    i--;
    if (i == 0) {
        i = 5;
        img.src = `img/image-slide-${i}.jpg`;
    } else {
        img.src = `img/image-slide-${i}.jpg`;
    }
});