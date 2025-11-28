import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Category } from '../types/category.types';
import { CategoryListItem } from './CategoryListItem';

interface CategoryListProps {
  items: Category[];
  onToggleActive?: ((id: string, value: boolean) => void) | undefined;
  onEdit?: ((id: string) => void) | undefined;
  onDuplicate?: ((id: string) => void) | undefined;
  onDelete?: ((id: string) => void) | undefined;
}

export const CategoryList: FC<CategoryListProps> = ({
  items,
  onToggleActive,
  onEdit,
  onDuplicate,
  onDelete,
}) => {
  if (!items.length) {
    return (
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Категорій поки немає.
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 1.5, px: 1 }}
      >
        <Typography variant="caption" color="text.secondary">
          Категорія
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Дати
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Статус / Дії
        </Typography>
      </Stack>

      <Box>
        {items.map((category) => (
          <CategoryListItem
            key={category.id}
            category={category}
            onToggleActive={onToggleActive}
            onEdit={onEdit}
            onDuplicate={onDuplicate}
            onDelete={onDelete}
          />
        ))}
      </Box>
    </Box>
  );
};
