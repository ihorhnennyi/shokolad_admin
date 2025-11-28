import { Box, Button } from '@mui/material';
import { FC } from 'react';
import { PageTwoColumnLayout } from '../../layouts/components/layouts/PageTwoColumnLayout';
import { PageHeaderSection } from '../../layouts/components/sections/PageHeaderSection';

const CategoriesPage: FC = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <PageHeaderSection
        title="Категорії"
        subtitle="Тут буде управління категоріями продукції."
        actions={
          <Button variant="contained" color="primary">
            Створити категорію
          </Button>
        }
      />

      <PageTwoColumnLayout left={<></>} right={<></>} />
    </Box>
  );
};

export default CategoriesPage;
