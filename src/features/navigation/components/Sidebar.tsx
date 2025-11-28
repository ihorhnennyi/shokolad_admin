import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
} from '@mui/material';
import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { sidebarItems } from '../data/sidebarItems';
import { useSidebar } from '../hooks/useSidebar';

const SIDEBAR_WIDTH = 260;
const SIDEBAR_COLLAPSED_WIDTH = 80;

export const Sidebar: FC = () => {
  const location = useLocation();
  const { collapsed, toggleCollapsed } = useSidebar();

  return (
    <Box
      sx={{
        width: collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH,
        height: '100vh',
        bgcolor: 'primary.dark',
        color: 'primary.contrastText',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        px: collapsed ? 1.5 : 2.5,
        py: 3,
        boxShadow: 4,
        borderRadius: 0, // убрали скругление у основного бокса
        transition: 'width 0.25s ease, padding 0.25s ease',
        overflow: 'hidden',
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap={1}
        mb={3}
        sx={{ position: 'relative' }}
      >
        <Box
          component="img"
          src="/logo.webp"
          alt="Reklama & Shokolad"
          sx={{
            height: collapsed ? 0 : 32,
            width: collapsed ? 0 : 'auto',
            opacity: collapsed ? 0 : 1,
            transition: 'opacity 0.25s ease, height 0.25s ease, width 0.25s ease',
          }}
        />

        <IconButton
          onClick={toggleCollapsed}
          size="small"
          sx={{
            color: 'primary.contrastText',
            transition: 'transform 0.25s ease',
            ml: collapsed ? 0 : 1,
          }}
        >
          {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
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

          const button = (
            <ListItemButton
              component={NavLink}
              to={item.path}
              sx={{
                borderRadius: 999,
                px: collapsed ? 1.25 : 1.5,
                py: 1,
                color: selected ? 'primary.contrastText' : 'rgba(255,255,255,0.85)',
                bgcolor: selected ? 'primary.main' : 'transparent',
                '&:hover': {
                  bgcolor: selected ? 'primary.main' : 'rgba(255,255,255,0.15)',
                },
                textDecoration: 'none',
                minHeight: 44,
                transition: 'background-color 0.2s ease, padding 0.2s ease',
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 32,
                  color: selected ? 'primary.contrastText' : 'rgba(255,255,255,0.8)',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Icon />
              </ListItemIcon>

              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  variant: 'body2',
                  fontWeight: selected ? 600 : 500,
                  noWrap: true,
                }}
                sx={{
                  opacity: collapsed ? 0 : 1,
                  ml: collapsed ? 0 : 1,
                  transition: 'opacity 0.2s ease, margin 0.2s ease',
                }}
              />
            </ListItemButton>
          );

          return (
            <ListItem key={item.id} disablePadding>
              {collapsed ? (
                <Tooltip title={item.label} placement="right">
                  {button}
                </Tooltip>
              ) : (
                button
              )}
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
