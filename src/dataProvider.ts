import simpleRestProvider from 'ra-data-simple-rest';
import { fetchUtils } from 'react-admin';

const fetchJsonWithAuth = (url: string, options: fetchUtils.Options = {}) => {
  // Ensure options.headers is always a Headers object
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  } else if (!(options.headers instanceof Headers)) {
    options.headers = new Headers(options.headers); // Convert to Headers if it's an array
  }

  const token = localStorage.getItem('authToken'); 
  if (token) {
    options.headers.set('Authorization', `Bearer ${token}`);
  }

  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = simpleRestProvider(
  import.meta.env.VITE_SIMPLE_REST_URL,
  fetchJsonWithAuth
);