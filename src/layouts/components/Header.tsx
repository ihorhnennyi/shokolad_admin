import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';

export const Header: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: 70,
        display: 'flex',
        alignItems: 'center',
        px: 3,
        bgcolor: 'primary.dark',
        color: 'primary.contrastText',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: 2,
          py: 0.7,
          borderRadius: 999,
          bgcolor: 'rgba(255,255,255,0.15)',
          minWidth: 280,
          flex: 1,
        }}
      >
        <SearchIcon sx={{ color: 'rgba(255,255,255,0.7)', mr: 1 }} />
        <InputBase
          placeholder="Пошук..."
          sx={{
            flex: 1,
            fontSize: 14,
            color: 'primary.contrastText',
            '&::placeholder': { color: 'rgba(255,255,255,0.7)' },
          }}
        />
      </Paper>

      <Stack direction="row" spacing={1.5} alignItems="center" ml={2}>
        <Tooltip title="Сповіщення">
          <IconButton sx={{ color: 'primary.contrastText' }}>
            <NotificationsNoneIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Профіль">
          <IconButton onClick={handleOpenUserMenu}>
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <AccountCircleIcon />
            </Avatar>
          </IconButton>
        </Tooltip>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseUserMenu}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          sx={{ mt: 1 }}
        >
          <Box sx={{ px: 2, py: 1 }}>
            <Typography variant="subtitle2">Адміністратор</Typography>
            <Typography variant="caption" color="text.secondary">
              admin@example.com
            </Typography>
          </Box>

          <Divider />
          <MenuItem onClick={handleCloseUserMenu}>Профіль</MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>Налаштування</MenuItem>
          <Divider />
          <MenuItem sx={{ color: 'error.main' }}>Вийти</MenuItem>
        </Menu>
      </Stack>
    </Box>
  );
};
