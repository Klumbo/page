const body = document.querySelector("body");

const IMG_NUM = 4;

function handleImgLoad(image) 
{
    image.classList.add("bgImage");
    body.prepend(image);
}

function paintImage(imgNumber)
{
    const image = new Image();
    image.src = `img/${imgNumber + 1}.jpg`;
    image.addEventListener("load", handleImgLoad(image));
}

function genRandom()
{
    const number = Math.floor(Math.random() * IMG_NUM);
    return number;
}

function init()
{
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init(); 