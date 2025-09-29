function showPage(pageId) {
  document.querySelectorAll('main section').forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}