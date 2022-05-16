import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import React from 'react';
import { IType } from '../../types/type';
import { typeImage } from '../../utils/constants';
import { LinkItem } from '../LinkItem';
import styles from './CatalogCard.module.scss';

interface IProps {
  type: IType;
}

export const CatalogCard: React.FC<IProps> = ({ type }) => {
  return (
    <Card className={styles.root}>
      <LinkItem href="#">
        <CardMedia component="img" height="140" image={typeImage + type.image} alt={type.name} />
      </LinkItem>
      <CardContent>
        <LinkItem href="#">
          <Typography variant="h6">{type.name}</Typography>
        </LinkItem>
      </CardContent>
    </Card>
  );
};
