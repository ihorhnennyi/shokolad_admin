import { Box, Stack } from '@mui/material';
import { FC, ReactNode } from 'react';
import { PageCard } from '../ui/PageCard';

interface PageTwoColumnLayoutProps {
  left?: ReactNode;
  right?: ReactNode;
}

export const PageTwoColumnLayout: FC<PageTwoColumnLayoutProps> = ({ left, right }) => {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={2}
      sx={{
        mt: 1,
        flex: 1,
        minHeight: 0, // вместо calc(100vh-...), даём flex-рост
      }}
    >
      <Box
        sx={{
          flex: { xs: 1, md: 4 },
          display: 'flex',
          minHeight: 0,
        }}
      >
        <PageCard
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minHeight: 0,
          }}
        >
          {left}
        </PageCard>
      </Box>

      <Box
        sx={{
          flex: { xs: 1, md: 1 },
          display: 'flex',
          minHeight: 0,
        }}
      >
        <PageCard
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minHeight: 0,
          }}
        >
          {right}
        </PageCard>
      </Box>
    </Stack>
  );
};
