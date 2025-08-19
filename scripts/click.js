function hamburgerTransition(x) {
  // animate toggle to X
  x.classList.toggle('change');

  const dropDown = document.getElementById("dropdownMenu");
  dropDown.classList.toggle("active");
}
