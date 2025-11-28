import { ElementType } from 'react';

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: ElementType;
  productsCount: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
