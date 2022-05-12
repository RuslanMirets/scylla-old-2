import { Type } from './models/type.model';
import { TYPE_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';

@Injectable()
export class TypeService {
  constructor(@Inject(TYPE_REPOSITORY) private readonly typeRepository: typeof Type) {}

  async create(dto: CreateTypeDto): Promise<Type> {
    return await this.typeRepository.create<Type>(dto);
  }

  async findAll(): Promise<Type[]> {
    return await this.typeRepository.findAll<Type>();
  }
}
