const arrowOne = document.getElementsByClassName("arrow-one")[0];
const gallery = document.getElementById("img-container");
arrowOne.addEventListener('click', () => {
    gallery.scrollBy(-50, 0);
});

const arrowTwo = document.getElementsByClassName("arrow-two")[0];
arrowTwo.addEventListener('click', () => {
    gallery.scrollBy(50, 0);
});