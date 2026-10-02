document.addEventListener('DOMContentLoaded', () => {
  const now = new Date();
  const currentDate = byId('currentDate');
  if (currentDate) currentDate.textContent = new Intl.DateTimeFormat(undefined, { weekday: 'long', month: 'long', day: 'numeric' }).format(now);
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === 'dark') document.body.classList.add('dark');
  const themeToggle = byId('themeToggle');
  themeToggle?.addEventListener('click', () => { document.body.classList.toggle('dark'); localStorage.setItem(THEME_KEY, document.body.classList.contains('dark') ? 'dark' : 'light'); });
  const menuToggle = byId('menuToggle'); const sidebar = byId('sidebar');
  menuToggle?.addEventListener('click', () => sidebar?.classList.toggle('open'));
  document.addEventListener('click', event => { if (sidebar?.classList.contains('open') && !sidebar.contains(event.target) && event.target !== menuToggle) sidebar.classList.remove('open'); });
  document.querySelectorAll('[data-close-modal]').forEach(button => button.addEventListener('click', () => closeModal(button.closest('.modal-backdrop'))));
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.addEventListener('click', event => { if (event.target === backdrop) closeModal(backdrop); }));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') document.querySelectorAll('.modal-backdrop.open').forEach(closeModal); });
});
