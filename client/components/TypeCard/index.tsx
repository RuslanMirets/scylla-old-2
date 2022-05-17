import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { IType } from '../../types/type';
import { typeImage } from '../../utils/constants';
import { LinkItem } from '../LinkItem';
import styles from './TypeCard.module.scss';

interface IProps {
  type: IType;
}

export const TypeCard: React.FC<IProps> = ({ type }) => {
  const { department } = useAppSelector((state) => state.department);

  return (
    <Card className={styles.root}>
      <LinkItem href={`/catalog/${department?.slug}/${type.slug}`}>
        <CardMedia component="img" image={typeImage + type.image} alt={type.name} />
      </LinkItem>
      <CardContent>
        <LinkItem href={`/catalog/${department?.slug}/${type.slug}`}>
          <Typography variant="h6">{type.name}</Typography>
        </LinkItem>
      </CardContent>
    </Card>
  );
};
