function changeLight(color) {
  const lights = document.querySelectorAll('.light');
  lights.forEach(light => light.classList.remove('active'));

  const selectedLight = document.querySelector(`.${color}`);
  selectedLight.classList.add('active');
}