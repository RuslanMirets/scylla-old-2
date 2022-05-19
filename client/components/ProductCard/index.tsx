import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import React from 'react';
import { IProduct } from '../../types/product';
import { productImage } from '../../utils/constants';
import { LinkItem } from '../LinkItem';
import styles from './ProductCard.module.scss';

interface IProps {
  product: IProduct;
}

export const ProductCard: React.FC<IProps> = ({ product }) => {
  return (
    <Card className={styles.root}>
      <LinkItem href={`/product/${product.id}`}>
        <CardMedia component="img" image={productImage + product.images[0]} alt={product.title} />
      </LinkItem>
      <CardContent className={styles.content}>
        <LinkItem href={`/product/${product.id}`}>
          <Typography className={styles.title} variant="h6">{product.title}</Typography>
        </LinkItem>
      </CardContent>
      <CardActions className={styles.actions}>
        <Typography className={styles.price}>{product.price} ₽</Typography>
        <Button variant="contained" color="primary">
          Купить
        </Button>
      </CardActions>
    </Card>
  );
};
