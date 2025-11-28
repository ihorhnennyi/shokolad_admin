import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Avatar, Box, Chip, IconButton, Stack, Switch, Tooltip, Typography } from '@mui/material';
import { FC, useMemo } from 'react';
import { Category } from '../types/category.types';

interface CategoryListItemProps {
  category: Category;
  onToggleActive?: ((id: string, value: boolean) => void) | undefined;
  onEdit?: ((id: string) => void) | undefined;
  onDuplicate?: ((id: string) => void) | undefined;
  onDelete?: ((id: string) => void) | undefined;
}

export const CategoryListItem: FC<CategoryListItemProps> = ({
  category,
  onToggleActive,
  onEdit,
  onDuplicate,
  onDelete,
}) => {
  const Icon = category.icon;

  const createdAt = useMemo(
    () => new Date(category.createdAt).toLocaleDateString('uk-UA'),
    [category.createdAt],
  );

  const updatedAt = useMemo(
    () => new Date(category.updatedAt).toLocaleDateString('uk-UA'),
    [category.updatedAt],
  );

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        py: 1.25,
        px: 1,
        borderBottom: '1px solid',
        borderColor: 'divider',
        '&:last-of-type': {
          borderBottom: 'none',
        },
      }}
    >
      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ flex: 1.2, minWidth: 0 }}>
        <Avatar
          sx={{
            width: 36,
            height: 36,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
          }}
        >
          <Icon fontSize="small" />
        </Avatar>

        <Stack spacing={0.3} sx={{ minWidth: 0 }}>
          <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
            <Typography variant="subtitle2" noWrap>
              {category.name}
            </Typography>

            <Chip label={category.slug} size="small" variant="outlined" sx={{ height: 22 }} />

            <Typography
              variant="caption"
              sx={{
                color: category.productsCount > 0 ? 'text.secondary' : 'error.main',
                fontSize: 12,
                whiteSpace: 'nowrap',
              }}
            >
              {category.productsCount > 0 ? `${category.productsCount} товарів` : 'Немає товарів'}
            </Typography>
          </Box>
        </Stack>
      </Stack>

      <Box
        sx={{
          flex: 0.9,
          minWidth: 140,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          flexWrap: 'wrap',
        }}
      >
        <Typography variant="caption" color="text.secondary" whiteSpace="nowrap">
          Створено: {createdAt}
        </Typography>

        <Typography variant="caption" color="text.secondary">
          •
        </Typography>

        <Typography variant="caption" color="text.secondary" whiteSpace="nowrap">
          Оновлено: {updatedAt}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          justifyContent: 'flex-end',
          flex: 0.6,
        }}
      >
        <Switch
          size="small"
          checked={category.isActive}
          onChange={(e) => onToggleActive?.(category.id, e.target.checked)}
        />

        <Tooltip title="Редагувати">
          <IconButton size="small" onClick={() => onEdit?.(category.id)}>
            <EditOutlinedIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Дублювати">
          <IconButton size="small" onClick={() => onDuplicate?.(category.id)}>
            <ContentCopyOutlinedIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Видалити">
          <IconButton size="small" color="error" onClick={() => onDelete?.(category.id)}>
            <DeleteOutlineOutlinedIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};
