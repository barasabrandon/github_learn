const form = document.getElementById('age-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const age = document.getElementById('age').value;

  if (age < 18) {
    alert('You are not old enough to access this website.');
  } else {
    alert('Welcome to our website!');
  }
});
