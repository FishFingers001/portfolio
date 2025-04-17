const counters = document.querySelectorAll('.counter');
let started = false;

function animateCounters() {
  if (!started && window.scrollY + window.innerHeight > document.getElementById("o-nas").offsetTop + 100) {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = Math.ceil(target / 100);

        if (current < target) {
          counter.innerText = current + increment;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
    started = true;
  }
}

window.addEventListener('scroll', animateCounters);

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const msgBox = document.querySelector('.form-message');

  if (name === "" || email === "" || message === "") {
    msgBox.textContent = "Wypełnij wszystkie pola.";
    msgBox.style.color = "red";
  } else {
    msgBox.textContent = "Wiadomość wysłana!";
    msgBox.style.color = "green";
    this.reset();
  }
});
