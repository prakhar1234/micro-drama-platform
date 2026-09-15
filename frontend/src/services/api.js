const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

async function request(endpoint, options = {}) {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  const res = await fetch(`${API_BASE}${endpoint}`, { ...options, headers });
  if (!res.ok) {
    const error = await res.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(error.error || 'Request failed');
  }
  return res.json();
}

export const api = {
  // Auth
  login: (data) => request('/auth/login', { method: 'POST', body: JSON.stringify(data) }),
  register: (data) => request('/auth/register', { method: 'POST', body: JSON.stringify(data) }),

  // Dramas
  getDramas: () => request('/dramas'),
  getDrama: (id) => request(`/dramas/${id}`),

  // Episodes
  getEpisodes: (dramaId) => request(`/episodes/${dramaId}`),

  // User
  getProfile: () => request('/users/profile'),
  getWatchlist: () => request('/users/watchlist'),

  // Generation
  startGeneration: (data) => request('/generate', { method: 'POST', body: JSON.stringify(data) }),
  getGenerationStatus: (jobId) => request('/generate/' + jobId),
};
