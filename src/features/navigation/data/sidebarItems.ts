import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { SidebarItem } from '../types/navigation.types';

export const sidebarItems: SidebarItem[] = [
  {
    id: 'dashboard',
    label: 'Дашборд',
    path: '/',
    icon: DashboardOutlinedIcon,
  },
  {
    id: 'categories',
    label: 'Категорії',
    path: '/categories',
    icon: CategoryOutlinedIcon,
  },
  {
    id: 'products',
    label: 'Продукти',
    path: '/products',
    icon: Inventory2OutlinedIcon,
  },
  {
    id: 'orders',
    label: 'Замовлення',
    path: '/orders',
    icon: ListAltOutlinedIcon,
  },
  {
    id: 'users',
    label: 'Користувачі',
    path: '/users',
    icon: PeopleAltOutlinedIcon,
  },
];
