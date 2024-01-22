let images = [{
        url: "../images/jpeg/rostov-on-don_Admiral.jpg",
        city: 'Rostov-on-Don LCD admiral',
        repairTime: '3.5 months',
        apartmentArea: '81 m2',
    }, {
        url: "../images/jpeg/sochi-thieves.jpg",
        city: 'Sochi Thieves',
        repairTime: '4 months',
        apartmentArea: '105 m2',
    }, {
        url: "../images/jpeg/rostov-on-don_patriotic.jpg",
        city: 'Rostov-on-Don Patriotic',
        repairTime: '3 months',
        apartmentArea: '93 m2',
    }];

function getSlider() {
    if (!images || !images.length) return;
    
    let sliderImg = document.querySelector(".slider__img");
    let sliderArrows = document.querySelector(".slider__arrows");
    let sliderDots = document.querySelector(".slider__dots");
    let sliderTitle = document.querySelector(".slider__picture-list");
    
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
        sliderTitle.querySelector(".active").classList.remove("active");
        sliderTitle.querySelector(".n" + num).classList.add("active");
        changeSpan(num)
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
        images.forEach((image, index) => {
        let item = `<li class="slider__picture-item n${index} ${index === 0? "active" : ""}" data-index="${index}"><span class="slider__picture-text">Rostov-on-Don, Admiral</span></li>`;
        sliderTitle.innerHTML += item;
        });
        let itemSecond = sliderTitle.querySelectorAll(".slider__picture-text")[1];
        itemSecond.textContent = "Sochi Thieves";
        let itemThird = sliderTitle.querySelectorAll(".slider__picture-text")[2];
        itemThird.textContent = "Rostov-on-Don Patriotic";
        sliderTitle.querySelectorAll(".slider__picture-item").forEach(item => {
        item.addEventListener("click", function() {
            moveSlider(this.dataset.index);
        })
        })
    }

    function changeSpan(num) {
        let sliderColumnCity = document.querySelector(".column-city");
        let sliderColumnArea = document.querySelector(".column-area");
        let sliderColumnTime = document.querySelector(".column-time");
        sliderColumnCity.innerText = (images[num].city);
        sliderColumnArea.innerText = (images[num].apartmentArea);
        sliderColumnTime.innerText = (images[num].repairTime);
    }
}

document.addEventListener("DOMContentLoaded", getSlider);