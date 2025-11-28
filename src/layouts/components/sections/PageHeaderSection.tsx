import { Box, Stack, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import { PageCard } from '../ui/PageCard';

interface PageHeaderSectionProps {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}

export const PageHeaderSection: FC<PageHeaderSectionProps> = ({ title, subtitle, actions }) => {
  return (
    <PageCard
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 2,
      }}
    >
      <Stack spacing={0.5}>
        <Typography variant="h5" fontWeight={600}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        )}
      </Stack>

      {actions && (
        <Box display="flex" alignItems="center" gap={1}>
          {actions}
        </Box>
      )}
    </PageCard>
  );
};
