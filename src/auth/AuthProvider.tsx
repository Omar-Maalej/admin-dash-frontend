import { AuthProvider } from 'react-admin';

const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    const request = new Request(`${import.meta.env.VITE_SIMPLE_REST_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    return fetch(request)
      .then(async (response) => {
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Invalid credentials');
        }

        const { access_token } = await response.json();
        console.log(access_token); 
        localStorage.setItem('authToken', access_token);
      });
  },

  logout: () => {
    localStorage.removeItem('authToken');
    return Promise.resolve();
  },

  checkAuth: () => {
    return localStorage.getItem('authToken')
      ? Promise.resolve()
      : Promise.reject({ message: 'Not authenticated' });
  },

  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      return Promise.reject();
    }
    return Promise.resolve();
  },

};

export default authProvider;