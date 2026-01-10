const KEY = "ai_thumbnail_history";

export function getHistory() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function saveToHistory(item) {
  const history = getHistory();
  history.unshift(item); // newest first
  localStorage.setItem(KEY, JSON.stringify(history.slice(0, 20)));
}

export function clearHistory() {
  localStorage.removeItem(KEY);
}
