function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function formatTime(ts) {
  if (!ts) return '...';
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleString('tr-TR', {
    day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'
  });
}

console.log('%c REDHACKOFFICIAL ', 'background:#881822;color:#fff;font-weight:bold;padding:4px 8px;border-radius:3px;');