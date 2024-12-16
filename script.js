document.addEventListener('DOMContentLoaded', function() {  
  const questionHeaders = document.querySelectorAll('.question-header');
  if (questionHeaders.length > 0) {
    questionHeaders.forEach(button => {
      button.addEventListener('click', () => {
        const questionItem = button.parentElement;
        const questionContent = button.nextElementSibling;

        questionItem.classList.toggle('active');

        if (questionContent.style.display === "block") {
          questionContent.style.display = "none";
          button.querySelector('.icon').textContent = "+";
        } else {
          questionContent.style.display = "block";
          button.querySelector('.icon').textContent = "-";
        }

        document.querySelectorAll('.accordion-item').forEach(item => {
          if (item !== questionItem) {
            item.classList.remove('active');
            item.querySelector('.accordion-content').style.display = "none";
            item.querySelector('.icon').textContent = "+";
          }
        });
      });
    });
  }

  if ($('.profiles').length > 0) {
    $(document).ready(function(){ 
      $('.profiles').slick({
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1,
        dots: true,
        arrows: true,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev">&larr;</button>',
        nextArrow: '<button type="button" class="slick-next">&rarr;</button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
    });
  }

  const butt = document.querySelector('.buton');
  if (butt) {
    butt.addEventListener('click', function() {
      const inputs = document.querySelectorAll("input");
      const input_values = [];
      inputs.forEach(input => input_values.push(input.value));
      alert('Форма отправлена!');
    });
  }

  const burgerMenu = document.getElementById('burger-menu');
  const navLinks = document.getElementById('links');

  if (burgerMenu && navLinks) {
    burgerMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  const burgerMenu2 = document.getElementById('burger-menu-2');
  const navLinks2 = document.getElementById('links-2');

  if (burgerMenu2 && navLinks2) {
    burgerMenu2.addEventListener('click', () => {
      navLinks2.classList.toggle('open')
      navLinks2.classList.toggle('active');
    });
  }
});
