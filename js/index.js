/*For Navigation Bar*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("topNav").style.boxShadow = "0px 0px 40px #e4e4e4";
  } else {
    document.getElementById("topNav").style.boxShadow = "none";
  }
}
/*For Navigation Bar*/
/*For Slider*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
/*For Slider*/
document.addEventListener("DOMContentLoaded",() => {
 function counter(id, start, end, duration) {
  let obj = document.getElementById(id),
  current = start,
  range = end - start,
  increment = end > start ? 1: -1,
  step = Math.abs(Math.floor(duration/range)),
  timer = setInterval(()=>{
  current += increment;
  obj.textContent = current;
  if (current == end) {
   clearInterval(timer)
   }
  }, step);
 }
 counter("count1", 0, 10, 1000);
 counter("count2", 0, 713, 4000);
 counter("count3", 0, 1000, 2000);
 counter("count4", 0, 50, 4000);
});
/*For Slider*/
/*For Breakfast Slider*/
var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlidesTwo");
  var dots2 = document.getElementsByClassName("dot");
  if (n > slides2.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";  
  }
  slides2[slideIndex2-1].style.display = "block";  
}
/*For Breakfast Slider*/

/*For Lunch Slider*/
var slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  var i;
  var slides3 = document.getElementsByClassName("mySlidesThree");
  var dots3 = document.getElementsByClassName("dot");
  if (n > slides3.length) {slideIndex3 = 1}    
  if (n < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";  
  }
  slides3[slideIndex3-1].style.display = "block";  
}
/*For Lunch Slider*/
/*For Dinner Slider*/
var slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
  var i;
  var slides4 = document.getElementsByClassName("mySlidesFour");
  var dots4 = document.getElementsByClassName("dot");
  if (n > slides4.length) {slideIndex4 = 1}    
  if (n < 1) {slideIndex4 = slides4.length}
  for (i = 0; i < slides4.length; i++) {
      slides4[i].style.display = "none";  
  }
  slides4[slideIndex4-1].style.display = "block";  
}
/*For Dinner Slider*/
/*For Coupon Slider*/
var slideIndex5 = 1;
showSlides5(slideIndex5);

function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
  var i;
  var slides5 = document.getElementsByClassName("mySlidesFive");
  var dots5 = document.getElementsByClassName("dot");
  if (n > slides5.length) {slideIndex5 = 1}    
  if (n < 1) {slideIndex5 = slides5.length}
  for (i = 0; i < slides5.length; i++) {
      slides5[i].style.display = "none";  
  }
  slides5[slideIndex5-1].style.display = "block";  
}
/*For Coupon Slider*/
/*For Testimonial Slider*/
var flideIndex = 1;
showFlides(flideIndex);

function plusFlides(n) {
  showFlides(flideIndex += n);
}

function currentFlide(n) {
  showFlides(flideIndex = n);
}

function showFlides(n) {
 var i;
 var flides = document.getElementsByClassName("mySlides5");
 var dots = document.getElementsByClassName("dott");
 if (n > flides.length) {flideIndex = 1}    
 if (n < 1) {flideIndex = flides.length}
 for (i = 0; i < flides.length; i++) {
     flides[i].style.display = "none";  
 }
 for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
 }
 flides[flideIndex-1].style.display = "block";  
 dots[flideIndex-1].className += " active";
}
/*For Testimonial Slider*/
/*For FAQ Accordion*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
/*For FAQ Accordion*/
/*For Order Form*/
function openModel() {
  document.getElementById("formss").style.display="block";
}

 var orderFormContainer = document.getElementById('formss');
window.onclick = function(event) {
    if (event.target == orderFormContainer) {
        orderFormContainer.style.display = "none";
    }
}
/*For Order Form*/