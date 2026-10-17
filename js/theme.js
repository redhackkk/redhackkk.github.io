(function () {
  const saved = localStorage.getItem('rh-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);

  window.toggleTheme = function () {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('rh-theme', next);
    updateIcon();
  };

  function updateIcon() {
    const btn = document.getElementById('themeBtn');
    if (!btn) return;
    const cur = document.documentElement.getAttribute('data-theme');
    btn.textContent = cur === 'dark' ? '☀' : '☾';
    btn.title = cur === 'dark' ? 'Açık temaya geç' : 'Koyu temaya geç';
  }

  document.addEventListener('DOMContentLoaded', updateIcon);
})();
