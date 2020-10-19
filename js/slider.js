function listenEvent1() {
  document.getElementById("outer3").addEventListener("click", toggleState3);
}
    
function toggleState3() {
  let galleryView = document.getElementById("galleryView")
  let tilesView = document.getElementById("tilesView")
  let outer = document.getElementById("outer3");
  let slider = document.getElementById("slider3");
  let tilesContainer = document.getElementById("tilesContainer");
  if (slider.classList.contains("active")) {
    slider.classList.remove("active");
    outer.classList.remove("outerActive");
    galleryView.style.display = "flex";
    tilesView.style.display = "none";
    
    while (tilesContainer.hasChildNodes()) {
      tilesContainer.removeChild(tilesContainer.firstChild)
      }  
  } else {
    slider.classList.add("active");
    outer.classList.add("outerActive");
    galleryView.style.display = "none";
    tilesView.style.display = "flex";
     
    for (let i = 0; i < imgObject.length - 1; i++) {
      let tileItem = document.createElement("div");
      tileItem.classList.add("tileItem");
      tileItem.style.background =  "url(" + imgObject[i] + ")";
      tileItem.style.backgroundSize = "contain";  
      tilesContainer.appendChild(tileItem);      
    }
  };
}

let imgObject = [
  "assets/photos/min/ball-ball-shaped-blur-bubble-302743.jpg",
  "assets/photos/min/beach-blur-clouds-dawn-462030.jpg",
  "assets/photos/min/astrology-3782837_1920.jpg",
  "assets/photos/min/pexels-daria-shevtsova-1030920.jpg",
  "assets/photos/min/pexels-kaboompics-com-6112.jpg",
  "assets/photos/min/ocean-3605547_1920.jpg",
  "assets/photos/min/pexels-isaac-taylor-1557251.jpg",
  "assets/photos/min/silhouette-of-person-holding-glass-mason-jar-1274260.jpg",
  "assets/photos/min/pexels-pixabay-372748.jpg",
  "assets/photos/min/woman-holding-a-moon-3622517.jpg",
  "assets/photos/min/white-painted-papers-51343.jpg",
  "assets/photos/min/woman-holding-a-yellow-string-light-3378993.jpg",
  "assets/photos/min/afterglow-backlit-beautiful-crescent-moon-556666.jpg",
];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {

  let mainViews = document.getElementsByClassName('slider__galleryView__galleryContainer__linkTag__mainView');
  for (let index = 0; index < mainViews.length; index++) {
    const mainView = mainViews[0];
    mainView.style.background = "url(" + imgObject[mainImg] + ")";
  }

  let leftViews = document.getElementsByClassName('slider__galleryView__galleryContainer__leftView');
  for (let index = 0; index < leftViews.length; index++) {
    const leftView = leftViews[0];
    leftView.style.background = "url(" + imgObject[prevImg] + ")";
  }
  
  
  let rightViews = document.getElementsByClassName('slider__galleryView__galleryContainer__rightView');
  for (let index = 0; index < rightViews.length; index++) {
    const rightView = rightViews[0];
    rightView.style.background = "url(" + imgObject[nextImg] + ")";
  }
  
  
  let linkTags = document.getElementsByClassName('slider__galleryView__galleryContainer__linkTag');
  for (let index = 0; index < linkTags.length; index++) {
    const linkTag = linkTags[0];
    linkTag.href = imgObject[mainImg];
  }
  
  /*let mainView = document.getElementById("mainView");
  mainView.style.background = "url(" + imgObject[mainImg] + ")";

  let leftView = document.getElementById("leftView");
  leftView.style.background = "url(" + imgObject[prevImg] + ")";
  
  let rightView = document.getElementById("rightView");
  rightView.style.background = "url(" + imgObject[nextImg] + ")";
  
  let linkTag = document.getElementById("linkTag")
  linkTag.href = imgObject[mainImg];*/

};

function scrollRight() {
  
  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= (imgObject.length -1)) {
    nextImg = 0;
  } else {
    nextImg++;
  }; 
  loadGallery();
};

function scrollLeft() {
  nextImg = mainImg
  mainImg = prevImg;
   
  if (prevImg === 0) {
    prevImg = imgObject.length - 1;
  } else {
    prevImg--;
  };
  loadGallery();
};

function listenEvent2() {
  document.getElementById("navRight").addEventListener("click", scrollRight);
  document.getElementById("navLeft").addEventListener("click", scrollLeft);
  document.getElementById("rightView").addEventListener("click", scrollRight);
  document.getElementById("leftView").addEventListener("click", scrollLeft);
  document.addEventListener('keyup',function(e){
      if (e.keyCode === 37) {
        scrollLeft();
      } else if(e.keyCode === 39) {
        scrollRight();
      }
  });
}


loadGallery();






