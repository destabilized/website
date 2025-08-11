document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    const checkbox = document.getElementById('sidebar-active');
    if (checkbox && checkbox.checked) {
      checkbox.checked = false;
    }
  });
});