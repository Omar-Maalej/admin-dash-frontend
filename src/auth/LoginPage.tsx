import React, { useState } from 'react';
import { useLogin, Notification, useNotify } from 'react-admin';
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password });
    } catch (error) {
      notify((error as any)?.message || 'Invalid credentials', { type: 'error' });
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0',
      }}
    >
      <Card sx={{ width: 300 }}>
        <CardContent>
          <Typography variant="h5" component="h1" sx={{ textAlign: 'center', marginBottom: 2 }}>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ marginBottom: 2 }}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                fullWidth
                required
              />
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                fullWidth
                required
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ padding: '10px 0', textTransform: 'none' }}
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
      <Notification />
    </Box>
  );
};

export default LoginPage;
