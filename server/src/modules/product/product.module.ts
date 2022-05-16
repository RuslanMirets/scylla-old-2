import { SizeModule } from './../size/size.module';
import { BrandModule } from './../brand/brand.module';
import { CategoryModule } from './../category/category.module';
import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ColorModule } from '../color/color.module';
import { productProvider } from './product.provider';

@Module({
  imports: [CategoryModule, BrandModule, ColorModule, SizeModule],
  providers: [ProductService, ...productProvider],
  controllers: [ProductController],
})
export class ProductModule {}
