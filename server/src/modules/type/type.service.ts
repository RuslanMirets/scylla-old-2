import { Category } from 'src/modules/category/models/category.model';
import { UpdateTypeDto } from './dto/update-type.dto';
import { Type } from './models/type.model';
import { TYPE_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import slugify from 'slugify';
import { Department } from '../department/models/department.model';
import { Op } from 'sequelize';

@Injectable()
export class TypeService {
  constructor(@Inject(TYPE_REPOSITORY) private readonly typeRepository: typeof Type) {}

  async create(dto: CreateTypeDto, image: string): Promise<Type> {
    const slug = slugify(dto.description, { lower: true });
    return await this.typeRepository.create<Type>({ ...dto, slug, image });
  }

  async findAll(): Promise<Type[]> {
    return await this.typeRepository.findAll<Type>({ include: { all: true } });
  }

  async findAllByDepartment(slug: string): Promise<Type[]> {
    return await this.typeRepository.findAll<Type>({
      where: { '$department.slug$': { [Op.eq]: slug } },
      include: { all: true },
    });
  }

  async findOneById(id: number): Promise<Type> {
    return await this.typeRepository.findOne<Type>({ where: { id }, include: { all: true } });
  }

  async findOneBySlug(slug: string): Promise<Type> {
    return await this.typeRepository.findOne<Type>({
      where: { slug },
      include: { all: true },
    });
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
