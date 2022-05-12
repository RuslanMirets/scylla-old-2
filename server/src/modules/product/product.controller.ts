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
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Category } from 'src/core/decorators/category.decorator';
import { Brand } from 'src/core/decorators/brand.decorator';
import { Color } from 'src/core/decorators/color.decorator';
import { Department } from 'src/core/decorators/department.decorator';

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
    @Color() colorId: number,
    @Department() departmentId: number,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ): Promise<ProductModel> {
    return this.productService.create(
      dto,
      categoryId,
      brandId,
      colorId,
      departmentId,
      files.map((file) => file.filename),
    );
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get('image/:imagename')
  findProfileImage(@Param('imagename') imagename, @Res() res): Observable<Object> {
    return of(res.sendFile(join(process.cwd(), 'uploads/images/product/' + imagename)));
  }

  @Get(':id')
  findOneById(@Param('id') id: number) {
    return this.productService.findOneById(id);
  }
}
