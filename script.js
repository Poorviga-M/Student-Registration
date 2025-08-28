const form = document.getElementById('registrationForm');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent page refresh

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const course = document.getElementById('course').value;

  // Validation
  if (name === "" || email === "" || phone === "" || course === "") {
    alert("⚠️ Please fill out all fields before submitting.");
    return;
  }

  // Show confirmation message
  confirmation.style.display = "block";
  confirmation.innerHTML = `
    ✅ Registration Successful! <br>
    <strong>Name:</strong> ${name} <br>
    <strong>Email:</strong> ${email} <br>
    <strong>Phone:</strong> ${phone} <br>
    <strong>Course:</strong> ${course}
  `;

  // Reset form
  form.reset();
});
