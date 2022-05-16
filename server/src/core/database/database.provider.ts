import { ProductColor } from './../../modules/color/models/product-color';
import { ProductSize } from './../../modules/size/models/product-size.model';
import { Department } from './../../modules/department/models/department.model';
import { Size } from './../../modules/size/models/size.model';
import { Color } from './../../modules/color/models/color.model';
import { Brand } from './../../modules/brand/models/brand.model';
import { Category } from './../../modules/category/models/category.model';
import { Type } from './../../modules/type/models/type.model';
import { Sequelize } from 'sequelize-typescript';
import { Role } from 'src/modules/role/models/role.model';
import { UserRole } from 'src/modules/role/models/user-role.model';
import { User } from 'src/modules/user/models/user.model';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { Product } from 'src/modules/product/models/product.model';

export const databaseProvider = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([
        User,
        Role,
        UserRole,
        Type,
        Category,
        Brand,
        Color,
        Size,
        Department,
        Product,
        ProductSize,
        ProductColor,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
