import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { ICategory } from '../../types/category';
import { IDepartment } from '../../types/department';
import { categoryImage } from '../../utils/constants';
import { LinkItem } from '../LinkItem';
import styles from './CategoryCard.module.scss';

interface IProps {
  category: ICategory;
}

export const CategoryCard: React.FC<IProps> = ({ category }) => {
  const { department } = useAppSelector((state) => state.department);
  const { type } = useAppSelector((state) => state.type);

  return (
    <Card className={styles.root}>
      <LinkItem href={`/catalog/${department?.slug}/${type?.slug}/${category.slug}`}>
        <CardMedia component="img" image={categoryImage + category.image} alt={category.name} />
      </LinkItem>
      <CardContent>
        <LinkItem href="#">
          <Typography variant="h6">{category.name}</Typography>
        </LinkItem>
      </CardContent>
    </Card>
  );
};
