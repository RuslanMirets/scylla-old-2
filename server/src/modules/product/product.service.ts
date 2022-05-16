import { DepartmentService } from './../department/department.service';
import { SizeService } from './../size/size.service';
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
    private readonly departmentService: DepartmentService,
    private readonly brandService: BrandService,
    private readonly colorService: ColorService,
    private readonly sizeService: SizeService,
  ) {}

  async create(
    dto: CreateProductDto,
    categoryId: number,
    departmentId: number,
    brandId: number,
    images: string[],
    sizeId: number,
    colorId: number,
  ): Promise<Product> {
    const category = await this.categoryService.findOneById(categoryId);
    const department = await this.departmentService.findOneById(departmentId);
    const brand = await this.brandService.findOneById(brandId);

    const newProduct = await this.productRepository.create<Product>({
      ...dto,
      categoryId: categoryId,
      departmentId: departmentId,
      brandId: brandId,
      images: images,
    });

    const size = await this.sizeService.findAllById(sizeId);
    await newProduct.$set(
      'size',
      size.filter((item) => item.id),
    );

    const color = await this.colorService.findAllById(colorId);
    await newProduct.$set(
      'color',
      color.filter((item) => item.id),
    );

    return { ...newProduct['dataValues'], category, department, brand, size, color };
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.findAll<Product>({ include: { all: true } });
  }

  async findOneById(id: number): Promise<Product> {
    return await this.productRepository.findOne<Product>({ where: { id }, include: { all: true } });
  }
}
