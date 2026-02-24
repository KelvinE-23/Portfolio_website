// These functions open and close the contact form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// This function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// This function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// This function changes the slide when the dots are clicked
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Close the contact form if user clicks cancel or clicks outside the form
document.addEventListener("click", function (event) {
  const clickedCancel = event.target.matches(".cancel");
  const clickedInsideForm = event.target.closest(".form-popup");
  const clickedOpenButton = event.target.closest(".Pop_Up_Button");
  const clickedContactLink = event.target.closest(".contact");

  if (clickedCancel || (!clickedInsideForm && !clickedOpenButton && !clickedContactLink)) {
    closeForm();
  }
}, false);