import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

const navItems = [
  { label: 'Дашборд', to: '/' },
  { label: 'Категорії', to: '/categories' },
  { label: 'Продукти', to: '/products' },
  { label: 'Замовлення', to: '/orders' },
  { label: 'Користувачі', to: '/users' },
];

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static" color="primary" elevation={3} sx={{ mb: 3 }}>
        <Toolbar>
          <IconButton edge="start" sx={{ mr: 2, display: { xs: 'inline-flex', md: 'none' } }}>
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            Reklama & Shokolad Admin
          </Typography>

          <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                sx={{
                  color: 'inherit',
                  textTransform: 'none',
                  '&.active': {
                    bgcolor: 'primary.dark',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 3,
            p: 3,
            mb: 4,
            minHeight: '60vh',
          }}
        >
          {children}
        </Box>
      </Container>
    </Box>
  );
};
