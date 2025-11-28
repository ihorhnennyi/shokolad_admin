import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { Category } from '../types/category.types';

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Плитка шоколаду',
    slug: 'chocolate-bars',
    icon: CategoryOutlinedIcon,
    isActive: true,
    createdAt: '2025-11-20T10:00:00.000Z',
    updatedAt: '2025-11-27T09:30:00.000Z',
    subcategoriesCount: 3,
  },
  {
    id: '2',
    name: 'Подарункові набори',
    slug: 'gift-boxes',
    icon: Inventory2OutlinedIcon,
    isActive: true,
    createdAt: '2025-11-21T12:15:00.000Z',
    updatedAt: '2025-11-26T14:10:00.000Z',
    subcategoriesCount: 5,
  },
  {
    id: '3',
    name: 'Акційні пропозиції',
    slug: 'special-offers',
    icon: LocalOfferOutlinedIcon,
    isActive: false,
    createdAt: '2025-11-22T08:40:00.000Z',
    updatedAt: '2025-11-25T16:05:00.000Z',
    subcategoriesCount: 0,
  },
];
