import { DepartmentService } from './../department/department.service';
import { ColorService } from './../color/color.service';
import { BrandService } from './../brand/brand.service';
import { CategoryService } from './../category/category.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './models/product.model';
import { PRODUCT_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  constructor(
    @Inject(PRODUCT_REPOSITORY) private readonly productRepository: typeof Product,
    private readonly categoryService: CategoryService,
    private readonly brandService: BrandService,
    private readonly colorService: ColorService,
    private readonly departmentService: DepartmentService,
  ) {}

  async create(
    dto: CreateProductDto,
    categoryId: number,
    brandId: number,
    colorId: number,
    departmentId: number,
    images: string[],
  ): Promise<Product> {
    const category = await this.categoryService.findOneById(categoryId);
    const brand = await this.brandService.findOneById(brandId);
    const color = await this.colorService.findOneById(colorId);
    const department = await this.departmentService.findOneById(departmentId);
    const newProduct = await this.productRepository.create<Product>({
      ...dto,
      categoryId: categoryId,
      brandId: brandId,
      colorId: colorId,
      departmentId: departmentId,
      images: images,
    });
    return { ...newProduct['dataValues'], category, brand, color, department };
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.findAll<Product>({ include: { all: true } });
  }

  async findOneById(id: number): Promise<Product> {
    return await this.productRepository.findOne<Product>({ where: { id }, include: { all: true } });
  }
}
