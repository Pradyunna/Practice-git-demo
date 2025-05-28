document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const errorDiv = document.getElementById('error-message');
  const successDiv = document.getElementById('success-message');
  errorDiv.textContent = '';
  successDiv.style.display = 'none';

  // Simple email validation
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    errorDiv.textContent = 'Please enter a valid email address.';
    return;
  }

  // Simulate successful submission
  document.getElementById('signup-form').reset();
  successDiv.style.display = 'block';
});
