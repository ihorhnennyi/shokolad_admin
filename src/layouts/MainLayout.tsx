import { Box, Paper } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Sidebar } from '../features/navigation/components/Sidebar';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        display: 'flex',
      }}
    >
      <Sidebar />

      <Box
        component="main"
        sx={{
          flex: 1,
          p: 3,
          display: 'flex',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            flex: 1,
            bgcolor: 'background.paper',
            borderRadius: 4,
            p: 3,
          }}
        >
          {children}
        </Paper>
      </Box>
    </Box>
  );
};
