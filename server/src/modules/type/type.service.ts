import { UpdateTypeDto } from './dto/update-type.dto';
import { Type } from './models/type.model';
import { TYPE_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import slugify from 'slugify';
import { Category } from '../category/models/category.model';
import { Product } from '../product/models/product.model';
import { Department } from '../department/models/department.model';
import { Op } from 'sequelize';

@Injectable()
export class TypeService {
  constructor(@Inject(TYPE_REPOSITORY) private readonly typeRepository: typeof Type) {}

  async create(dto: CreateTypeDto): Promise<Type> {
    const slug = slugify(dto.name, { lower: true });
    return await this.typeRepository.create<Type>({ ...dto, slug });
  }

  async findAll(): Promise<Type[]> {
    return await this.typeRepository.findAll<Type>({ include: { all: true } });
  }

  async findAllByDepartment(slug: string): Promise<Type[]> {
    return await this.typeRepository.findAll<Type>({
      include: [
        {
          model: Category,
          required: true,
          include: [
            {
              model: Product,
              required: true,
              include: [{ model: Department, where: { slug: { [Op.eq]: slug } } }],
            },
          ],
        },
      ],
    });
  }

  async findOneById(id: number): Promise<Type> {
    return await this.typeRepository.findOne<Type>({ where: { id }, include: { all: true } });
  }

  async update(dto: UpdateTypeDto, id: number) {
    await this.typeRepository.update({ name: dto.name }, { where: { id: id } });
    return dto;
  }

  async delete(id: number) {
    return await this.typeRepository.destroy({ where: { id: id } });
  }

  async deleteAll() {
    return this.typeRepository.destroy({ where: {} });
  }
}
