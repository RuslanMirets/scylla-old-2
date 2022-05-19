import { CardActionArea, Typography, Button, Paper, Divider } from '@mui/material';
import React from 'react';
import { IProduct } from '../../types/product';
import classnames from 'classnames';
import styles from './ProductInfo.module.scss';
import { productImage } from '../../utils/constants';
import { addToCart } from '../../store/actions/cart';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

interface IProps {
  product: IProduct;
}

export const ProductInfo: React.FC<IProps> = ({ product }) => {
  const [tab, setTab] = React.useState(0);
  const [size, setSize] = React.useState(0);

  const isActive = (index: any) => {
    if (tab === index) return styles.active;
    return '';
  };
  const isActiveSize = (index: any) => {
    if (size === index) return styles.active;
    return '';
  };

  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, size: product.size }, cart));
  };

  return (
    <div className={styles.root}>
      <Typography variant="h4" component="h4">
        {product?.title}
      </Typography>
      <Paper className={styles.paper}>
        <div className={styles.body}>
          <div className={styles.images}>
            <img
              className={styles.image}
              src={productImage + product.images[tab]}
              alt={product.title}
            />
            <div className={styles.thumbnail}>
              {product?.images.map((image, index) => (
                <CardActionArea
                  className={classnames(styles.thumbnailImage, isActive(index))}
                  key={index}
                  onClick={() => setTab(index)}>
                  <img src={productImage + image} alt={product.title} />
                </CardActionArea>
              ))}
            </div>
          </div>
          <div className={styles.content}>
            <Typography className={styles.price} variant="h5">
              {product?.price} ₽
            </Typography>
            <div className={styles.count}>
              {product!.inStock > 0 ? (
                <Typography variant="subtitle1">В наличии: {product?.inStock}</Typography>
              ) : (
                <Typography variant="subtitle1">Нет в наличии</Typography>
              )}
              <Typography variant="subtitle1">Продано: {product?.sold}</Typography>
            </div>
            <Divider />
            <Typography className={styles.color} variant="subtitle1">
              Цвет:
              {product.color.map((item, index) => (
                <Typography variant="subtitle1" component="span" key={index}>
                  {item.name}
                </Typography>
              ))}
            </Typography>
            <Typography className={styles.brand} variant="subtitle1">
              Бренд:
              <Typography variant="subtitle1" component="span">
                {product.brand.name}
              </Typography>
            </Typography>
            <div>
              Размеры:
              <div className={styles.sizeItems}>
                {product.size.map((item, index) => (
                  <Typography
                    variant="subtitle1"
                    component="span"
                    className={classnames(styles.sizeItem, isActiveSize(index))}
                    key={index}
                    onClick={() => setSize(index)}>
                    {item.value}
                  </Typography>
                ))}
              </div>
            </div>
            <Divider />
            <Button
              variant="contained"
              disabled={product.inStock > 0 ? false : true}
              onClick={handleAddToCart}>
              Добавить в корзину
            </Button>
          </div>
        </div>
        <Typography className={styles.description} variant="body1">
          {product?.description}
        </Typography>
      </Paper>
    </div>
  );
};
