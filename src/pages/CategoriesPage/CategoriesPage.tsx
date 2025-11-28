import { CategoryList } from '@/features/categories/components/CategoryList';
import { mockCategories } from '@/features/categories/data/mockCategories';
import { Category } from '@/features/categories/types/category.types';
import { PageTwoColumnLayout } from '@/layouts/components/layouts/PageTwoColumnLayout';
import { PageHeaderSection } from '@/layouts/components/sections/PageHeaderSection';
import { Box, Button } from '@mui/material';
import { FC, useCallback, useState } from 'react';

const CategoriesPage: FC = () => {
  const [categories, setCategories] = useState<Category[]>(mockCategories);

  const handleToggleActive = useCallback((id: string, value: boolean) => {
    setCategories((prev) =>
      prev.map((category) => (category.id === id ? { ...category, isActive: value } : category)),
    );
  }, []);

  const handleEdit = useCallback((id: string) => {
    console.log('edit category', id);
  }, []);

  const handleDuplicate = useCallback((id: string) => {
    console.log('duplicate category', id);
  }, []);

  const handleDelete = useCallback((id: string) => {
    console.log('delete category', id);
  }, []);

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

      <PageTwoColumnLayout
        left={
          <CategoryList
            items={categories}
            onToggleActive={handleToggleActive}
            onEdit={handleEdit}
            onDuplicate={handleDuplicate}
            onDelete={handleDelete}
          />
        }
        right={
          <>{/* сюда позже добавим, например, статистику по кількості товарів у категоріях */}</>
        }
      />
    </Box>
  );
};

export default CategoriesPage;
