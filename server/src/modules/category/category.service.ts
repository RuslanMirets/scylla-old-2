import { TypeService } from './../type/type.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CATEGORY_REPOSITORY } from './../../core/constants/index';
import { Category } from './models/category.model';
import { Inject, Injectable } from '@nestjs/common';
import slugify from 'slugify';

@Injectable()
export class CategoryService {
  constructor(
    @Inject(CATEGORY_REPOSITORY) private readonly categoryRepository: typeof Category,
    private readonly typeService: TypeService,
  ) {}

  async create(dto: CreateCategoryDto, typeId: number): Promise<Category> {
    const type = await this.typeService.findOneById(typeId);
    const slug = slugify(dto.name, { lower: true });
    const newCategory = await this.categoryRepository.create<Category>({
      ...dto,
      slug,
      type: type,
    });
    return { ...newCategory['dataValues'], type };
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.findAll<Category>({ include: { all: true } });
  }

  async findOneById(id: number): Promise<Category> {
    return await this.categoryRepository.findOne<Category>({
      where: { id },
      include: { all: true },
    });
  }
}
