import { Box, Stack } from '@mui/material';
import { FC, ReactNode } from 'react';
import { PageCard } from '../ui/PageCard';

interface PageTwoColumnLayoutProps {
  left?: ReactNode;
  right?: ReactNode;
}

export const PageTwoColumnLayout: FC<PageTwoColumnLayoutProps> = ({ left, right }) => {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mt: 1 }}>
      <Box flex={{ xs: 1, md: 4 }}>
        <PageCard sx={{ minHeight: 180 }}>{left}</PageCard>
      </Box>

      <Box flex={{ xs: 1, md: 1 }}>
        <PageCard sx={{ minHeight: 180 }}>{right}</PageCard>
      </Box>
    </Stack>
  );
};
