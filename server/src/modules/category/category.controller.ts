import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category as CategoryModel } from './models/category.model';
import { CategoryService } from './category.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Type } from 'src/core/decorators/type.decorator';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() dto: CreateCategoryDto, @Type() typeId: number): Promise<CategoryModel> {
    return this.categoryService.create(dto, typeId);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: number) {
    return this.categoryService.findOneById(id);
  }

  @Patch('name/:id')
  updateName(@Body() dto: UpdateCategoryDto, @Param('id') id: number) {
    return this.categoryService.updateName(dto, id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.categoryService.delete(id);
  }

  @Delete()
  deleteAll() {
    return this.categoryService.deleteAll();
  }
}
