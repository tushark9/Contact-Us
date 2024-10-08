const container = document.querySelector(".container");
const btn = document.querySelector(".form-wrapper-left button");

// Toggle dark/light mode
btn.addEventListener("click", () => {
  container.classList.toggle("switch");
});

// Form submit event listener
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Input validation
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Display success message
  document.getElementById('successMessage').classList.remove('hidden');

  // Log form data to console
  console.log({
    name,
    email,
    message
  });

  // Replace form with a new one after submission
  setTimeout(() => {
    resetForm();
  }, 2000); // Delay before resetting the form (for UX, showing success message briefly)
});

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Reset the form by clearing inputs and creating a fresh form
function resetForm() {
  const formWrapper = document.querySelector('.form-wrapper-right');
  
  // Clear form content and replace it with a new form
  formWrapper.innerHTML = `
    <h1>Contact Us</h1>
    <form id="contactForm">
      <input class="field" id="name" type="text" placeholder="Your Name" />
      <input class="field" id="email" type="email" placeholder="Your Email" />
      <textarea class="field msg" placeholder="Your Message" id="message"></textarea>
      <button type="submit">Submit</button>
      <p id="successMessage" class="hidden">Thank you for contacting us!</p>
    </form>
  `;

  // Re-attach the form submit event listener to the newly added form
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }
    
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // Show success message
    document.getElementById('successMessage').classList.remove('hidden');

    // Log data to console
    console.log({
      name,
      email,
      message
    });

    // Reset again after submission
    setTimeout(() => {
      resetForm();
    }, 2000);
  });
}
