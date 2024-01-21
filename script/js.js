let images = [{
        url: "../images/jpeg/rostov-on-don_Admiral.jpg",
        title: "Rostov-on-Don, Admiral",
    }, {
        url: "../images/jpeg/sochi-thieves.jpg",
        title: "Sochi Thieves",
    }, {
        url: "../images/jpeg/rostov-on-don_patriotic.jpg",
        title: "Rostov-on-Don Patriotic",
}];

function getSlider() {
    if (!images || !images.length) return;
    
    let sliderImg = document.querySelector(".slider__img");
    let sliderArrows = document.querySelector(".slider__arrows");
    let sliderDots = document.querySelector(".slider__dots");
    
    initImages();
    initArrows();
    initDots();
    initTitles();
    
    function initImages() {
        images.forEach((image, index) => {
        let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
        sliderImg.innerHTML += imageDiv;
        });
    }
    
    function initArrows() {
        sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
        arrow.addEventListener("click", function() {
            let curNumber = +sliderImg.querySelector(".active").dataset.index;
            let nextNumber;
            if (arrow.classList.contains("left")) {
            nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
            } else {
            nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
            }
            moveSlider(nextNumber);
        });
        });
    }
    
    function moveSlider(num) {
        sliderImg.querySelector(".active").classList.remove("active");
        sliderImg.querySelector(".n" + num).classList.add("active");
        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");
    }

    function initDots() {
        images.forEach((image, index) => {
        let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
        sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
        dot.addEventListener("click", function() {
            moveSlider(this.dataset.index);
        })
        })
    }
    
    function initTitles() {
        let titleDiv = `<div class="slider__images-title">${images[0].title}</div>`;
        sliderImages.innerHTML += cropTitle(titleDiv, 50);
    }
    
    function changeTitle(num) {
        if (!images[num].title) return;
        let sliderTitle = sliderImages.querySelector(".slider__images-title");
        sliderTitle.innerText = cropTitle(images[num].title, 50);
    }
    
    function cropTitle(title, size) {
        if (title.length <= size) {
        return title;
        } else {
        return title.substr(0, size) + "...";
        }
    }
}

document.addEventListener("DOMContentLoaded", getSlider);