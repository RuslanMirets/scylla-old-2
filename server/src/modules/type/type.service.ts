import { Type } from './models/type.model';
import { TYPE_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import slugify from 'slugify';

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

  async findOneById(id: number): Promise<Type> {
    return await this.typeRepository.findOne<Type>({ where: { id }, include: { all: true } });
  }
}