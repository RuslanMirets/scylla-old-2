import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { categoryProvider } from './category.provider';

@Module({
  providers: [CategoryService, ...categoryProvider],
  controllers: [CategoryController],
  exports: [CategoryService],
})
export class CategoryModule {}
