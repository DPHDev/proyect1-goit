const buttonRight = document.getElementById('sliderRight');
const buttonLeft = document.getElementById('sliderLeft');

buttonRight.onclick = function () {
    // alert("Presionó el botón der");
  document.getElementById('reviews').scrollBy(380, 0);
};
buttonLeft.onclick = function () {
    // alert("Presionó el botón izq");
  document.getElementById('reviews').scrollBy(-380, 0);
};


// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     const clientSlide = entry.target.querySelector('.reviews_item');

//     if (entry.isIntersecting) {
//       square.classList.add('slide-animation');
// 	  return; // if we added the class, exit the function
//     }

//     // We're not intersecting, so remove the class!
//     square.classList.remove('slide-animation');
//   });
// });
// observer.observe(document.querySelector('.reviews'));
