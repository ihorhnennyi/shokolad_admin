import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';
import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { sidebarItems } from '../data/sidebarItems';

export const Sidebar: FC = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        width: 260,
        height: '100vh',
        bgcolor: 'primary.dark',
        color: 'primary.contrastText',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        px: 2.5,
        py: 3,
        borderTopRightRadius: 32,
        borderBottomRightRadius: 32,
        boxShadow: 4,
      }}
    >
      <Stack direction="row" alignItems="center" gap={1.5} px={0.5} mb={3}>
        <Box
          component="img"
          src="/logo.webp"
          alt="Reklama & Shokolad"
          sx={{ height: 32, width: 'auto', display: 'block' }}
        />
      </Stack>

      <List
        sx={{
          p: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 0.75,
        }}
      >
        {sidebarItems.map((item) => {
          const selected = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.path}
                sx={{
                  borderRadius: 999,
                  px: 1.5,
                  py: 1,
                  color: selected ? 'primary.contrastText' : 'rgba(255,255,255,0.85)',
                  bgcolor: selected ? 'primary.main' : 'transparent',
                  '&:hover': {
                    bgcolor: selected ? 'primary.main' : 'rgba(255,255,255,0.15)',
                  },
                  textDecoration: 'none',
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 32,
                    color: selected ? 'primary.contrastText' : 'rgba(255,255,255,0.8)',
                  }}
                >
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    variant: 'body2',
                    fontWeight: selected ? 600 : 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
