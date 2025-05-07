const sliderImages = [
  'images/slide1.jpg',
  'images/slide2.jpg',
  'images/slide3.jpg'
];

let sliderIndex = 0;
const slider = document.getElementById('slider-img');

if (slider) {
  setInterval(() => {
    sliderIndex = (sliderIndex + 1) % sliderImages.length;
    slider.src = sliderImages[sliderIndex];
  }, 3000);
}

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    alert('Thank you, ' + name + '! Your message has been received.');
    contactForm.reset();
  });
}
