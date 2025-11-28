import { Box, Button, Container, Stack, Typography } from '@mui/material';

const App = () => {
  return (
    <Container maxWidth="md">
      <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center">
        <Stack spacing={3} alignItems="center">
          <Typography variant="h3" component="h1">
            Admin Panel
          </Typography>

          <Typography variant="body1" textAlign="center">
            Чистый старт на Vite + React + MUI. Дальше добавим тему и структуру.
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button variant="contained">Основная кнопка</Button>
            <Button variant="outlined">Вторичная кнопка</Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default App;
