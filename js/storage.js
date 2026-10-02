const STORAGE_KEY = 'dailyJournalEntries';
const THEME_KEY = 'dailyJournalTheme';

function getJournals() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const entries = raw ? JSON.parse(raw) : [];
    return Array.isArray(entries) ? entries : [];
  } catch (error) {
    console.warn('Journal storage could not be read.', error);
    return [];
  }
}

function writeJournals(entries) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(entries)); return true; }
  catch (error) { console.warn('Journal storage could not be written.', error); return false; }
}

function saveJournal(journal) { const entries = getJournals(); entries.unshift(journal); return writeJournals(entries); }
function updateJournal(id, changes) { const entries = getJournals().map(entry => entry.id === id ? { ...entry, ...changes, updatedAt: new Date().toISOString() } : entry); return writeJournals(entries); }
function deleteJournal(id) { return writeJournals(getJournals().filter(entry => entry.id !== id)); }
function getJournalById(id) { return getJournals().find(entry => entry.id === id) || null; }
function clearAllJournals() { return writeJournals([]); }
