import { LoginForm } from '@/features/auth/components/LoginForm';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';

const LoginPage = () => {
  return (
    <Box
      minHeight="100vh"
      sx={{
        bgcolor: 'background.default',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={4}
          sx={{
            p: 4,
            borderRadius: 4,
            bgcolor: 'background.paper',
          }}
        >
          <Stack spacing={4}>
            <Stack spacing={1} textAlign="center">
              <Typography
                variant="h4"
                component="h1"
                sx={{ letterSpacing: 2, textTransform: 'uppercase' }}
              >
                Reklama & Shokolad
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Панель керування продукцією та замовленнями
              </Typography>
            </Stack>

            <LoginForm />
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;
