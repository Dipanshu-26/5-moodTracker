const MOODS = [
  { id: 'happy', label: 'Happy', emoji: '😊' }, { id: 'excited', label: 'Excited', emoji: '😄' },
  { id: 'calm', label: 'Calm', emoji: '😌' }, { id: 'good', label: 'Good', emoji: '🙂' },
  { id: 'neutral', label: 'Neutral', emoji: '😐' }, { id: 'sad', label: 'Sad', emoji: '😔' },
  { id: 'bad', label: 'Bad', emoji: '😞' }, { id: 'angry', label: 'Angry', emoji: '😡' },
  { id: 'anxious', label: 'Anxious', emoji: '😰' }
];
const BASE_PATH = window.location.pathname.includes('/pages/') ? '../' : '';
function getLocalDateString(date = new Date()) { const year = date.getFullYear(); const month = String(date.getMonth() + 1).padStart(2, '0'); const day = String(date.getDate()).padStart(2, '0'); return `${year}-${month}-${day}`; }
function parseDate(dateString) { const [year, month, day] = dateString.split('-').map(Number); return new Date(year, month - 1, day); }
function formatDate(dateString, options = { month: 'long', day: 'numeric', year: 'numeric' }) { return new Intl.DateTimeFormat(undefined, options).format(parseDate(dateString)); }
function formatShortDate(dateString) { return new Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric', year: 'numeric' }).format(parseDate(dateString)); }
function truncateText(text, limit = 110) { return text.length > limit ? `${text.slice(0, limit).trim()}...` : text; }
function escapeHtml(value = '') { return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;'); }
function generateId() { return `journal_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`; }
function getMood(id) { return MOODS.find(mood => mood.id === id) || MOODS.find(mood => mood.id === 'neutral'); }
function getGreeting() { const hour = new Date().getHours(); if (hour < 12) return 'Good morning'; if (hour < 17) return 'Good afternoon'; if (hour < 22) return 'Good evening'; return 'Good night'; }
function showToast(message, type = 'info') { const region = document.getElementById('toastRegion'); if (!region) return; const toast = document.createElement('div'); toast.className = `toast ${type}`; toast.textContent = message; region.appendChild(toast); setTimeout(() => toast.remove(), 3400); }
function openModal(id) { const modal = document.getElementById(id); if (!modal) return; modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); }
function closeModal(modal) { const target = typeof modal === 'string' ? document.getElementById(modal) : modal; if (!target) return; target.classList.remove('open'); target.setAttribute('aria-hidden', 'true'); }
function byId(id) { return document.getElementById(id); }
