let imagesEl = document.getElementsByClassName("img-container");
let dotEl = document.getElementsByClassName("dot");

let index = 0;

show_img(index);

function show_img(i){
    index += i;

    for(i=0; i<imagesEl.length; i++){
        imagesEl[i].style.display = "none";
    }

    for(i=0; i<dotEl.length; i++){
        dotEl[i].className = dotEl[i].className.replace("active", "");
    }

    if(index > imagesEl.length-1){
        index = 0;
    }

    if(index < 0){
        index = imagesEl.length-1;
    }

    imagesEl[index].style.display = "block";
    dotEl[index].classList.add("active");
}



