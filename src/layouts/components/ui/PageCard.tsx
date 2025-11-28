import { Paper, PaperProps } from '@mui/material';
import { FC, ReactNode } from 'react';

interface PageCardProps extends PaperProps {
  children: ReactNode;
}

export const PageCard: FC<PageCardProps> = ({ children, sx, ...rest }) => {
  return (
    <Paper
      elevation={1}
      sx={{
        borderRadius: 2,
        bgcolor: 'background.paper',
        p: 2,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Paper>
  );
};
