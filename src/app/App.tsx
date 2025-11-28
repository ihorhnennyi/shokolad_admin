import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material';

const App = () => {
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
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
            bgcolor: 'background.paper',
          }}
        >
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Typography variant="h3" color="text.primary">
              Admin Panel
            </Typography>

            <Typography variant="body1" color="text.secondary">
              Чистый старт на Vite + React + MUI. Дальше добавим тему и структуру.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="primary">
                Основная кнопка
              </Button>
              <Button variant="outlined" color="primary">
                Вторичная кнопка
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default App;
