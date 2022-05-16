import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import React from 'react';
import { ICategory } from '../../types/category';
import { IType } from '../../types/type';
import { typeImage } from '../../utils/constants';
import { LinkItem } from '../LinkItem';
import styles from './TypeCard.module.scss';

interface IProps {
  type: IType;
}

export const TypeCard: React.FC<IProps> = ({ type }) => {
  // console.log(type.category[0]);
  
  return (
    <Card className={styles.root}>
      <LinkItem href=''>
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
