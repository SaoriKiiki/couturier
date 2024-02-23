document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  fetch('submit_form.php', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Error in form submission.');
    }
  })
  .then(data => {
    console.log('Form submitted successfully:', data);
    // Redirect or show success message
  })
  .catch(error => {
    console.error('Error in form submission:', error);
    // Redirect or show error message
  });
});
