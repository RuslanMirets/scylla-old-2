import { TypeService } from './../type/type.service';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CATEGORY_REPOSITORY } from './../../core/constants/index';
import { Category } from './models/category.model';
import { Inject, Injectable } from '@nestjs/common';
import slugify from 'slugify';
import { Type } from '../type/models/type.model';
import { Op } from 'sequelize';

@Injectable()
export class CategoryService {
  constructor(
    @Inject(CATEGORY_REPOSITORY) private readonly categoryRepository: typeof Category,
    private readonly typeService: TypeService,
  ) {}

  async create(dto: CreateCategoryDto, image: string, typeId: number): Promise<Category> {
    const slug = slugify(dto.description, { lower: true });
    const type = await this.typeService.findOneById(typeId);
    const newCategory = await this.categoryRepository.create<Category>({
      ...dto,
      slug,
      image,
      typeId,
    });
    return { ...newCategory['dataValues'], type };
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.findAll<Category>({ include: { all: true } });
  }

  async findAllByType(slug: string): Promise<Category[]> {
    return await this.categoryRepository.findAll<Category>({
      include: [{ model: Type, where: { slug: { [Op.eq]: slug } } }],
    });
  }

  async findOneById(id: number): Promise<Category> {
    return await this.categoryRepository.findOne<Category>({
      where: { id },
      include: { all: true },
    });
  }

  async findOneBySlug(slug: string): Promise<Category> {
    return await this.categoryRepository.findOne<Category>({
      where: { slug },
      include: { all: true },
    });
  }

  async updateName(dto: UpdateCategoryDto, id: number) {
    await this.categoryRepository.update({ name: dto.name }, { where: { id: id } });
    return dto;
  }

  async delete(id: number) {
    return await this.categoryRepository.destroy({ where: { id: id } });
  }

  async deleteAll() {
    return this.categoryRepository.destroy({ where: {} });
  }
}
