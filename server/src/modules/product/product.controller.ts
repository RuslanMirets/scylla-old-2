import { CreateProductDto } from './dto/create-product.dto';
import { Product as ProductModel } from './models/product.model';
import { ProductService } from './product.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Category } from 'src/core/decorators/category.decorator';
import { Brand } from 'src/core/decorators/brand.decorator';
import { Color } from 'src/core/decorators/color.decorator';
import { Size } from 'src/core/decorators/size.decorator';

export const storage = {
  storage: diskStorage({
    destination: './uploads/images/product',
    filename: (req, file, callback) => {
      const filename = uuidv4();
      const extension = file.originalname.split('.').pop();
      callback(null, `${filename}.${extension}`);
    },
  }),
};

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('images', 99, storage))
  create(
    @Body() dto: CreateProductDto,
    @Category() categoryId: number,
    @Brand() brandId: number,
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Size() sizeId: number,
    @Color() colorId: number,
  ): Promise<ProductModel> {
    return this.productService.create(
      dto,
      categoryId,
      brandId,
      files.map((file) => file.filename),
      sizeId,
      colorId,
    );
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: number) {
    return this.productService.findOneById(id);
  }

  @Get('department/:id')
  findAllByDepartment(@Param('id') slug: string) {
    return this.productService.findAllByDepartment(slug);
  }

  @Get('category/:slug')
  findAllByCategory(@Param('slug') slug: string) {
    return this.productService.findAllByCategory(slug);
  }

  @Get('image/:imagename')
  findProfileImage(@Param('imagename') imagename, @Res() res): Observable<Object> {
    return of(res.sendFile(join(process.cwd(), 'uploads/images/product/' + imagename)));
  }
}
