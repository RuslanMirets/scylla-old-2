import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category as CategoryModel } from './models/category.model';
import { CategoryService } from './category.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Type } from 'src/core/decorators/type.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { Observable, of } from 'rxjs';
import { join } from 'path';

export const storage = {
  storage: diskStorage({
    destination: './uploads/images/category',
    filename: (req, file, callback) => {
      const filename = uuidv4();
      const extension = file.originalname.split('.').pop();
      callback(null, `${filename}.${extension}`);
    },
  }),
};

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', storage))
  create(
    @Body() dto: CreateCategoryDto,
    @UploadedFile() file: Express.Multer.File,
    @Type() typeId: number,
  ): Promise<CategoryModel> {
    return this.categoryService.create(dto, file.filename, typeId);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get('type/:slug')
  findAllByDepartment(@Param('slug') slug: string) {
    return this.categoryService.findAllByType(slug);
  }

  @Get(':id')
  findOneById(@Param('id') id: number) {
    return this.categoryService.findOneById(id);
  }

  @Get('/slug/:slug')
  findOneBySlug(@Param('slug') slug: string) {
    return this.categoryService.findOneBySlug(slug);
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

  @Get('image/:imagename')
  findProfileImage(@Param('imagename') imagename, @Res() res): Observable<Object> {
    return of(res.sendFile(join(process.cwd(), 'uploads/images/category/' + imagename)));
  }
}
