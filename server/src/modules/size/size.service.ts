import { UpdateSizeDto } from './dto/update-size.dto';
import { CreateSizeDto } from './dto/create-size.dto';
import { SIZE_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';
import { Size } from './models/size.model';

@Injectable()
export class SizeService {
  constructor(@Inject(SIZE_REPOSITORY) private readonly sizeRepository: typeof Size) {}

  async create(dto: CreateSizeDto): Promise<Size> {
    return await this.sizeRepository.create<Size>(dto);
  }

  async findAll(): Promise<Size[]> {
    return await this.sizeRepository.findAll<Size>({ include: { all: true } });
  }

  async findOneById(id: number): Promise<Size> {
    return await this.sizeRepository.findOne<Size>({ where: { id }, include: { all: true } });
  }

  async findAllById(id: number): Promise<Size[]> {
    return await this.sizeRepository.findAll({ where: { id } });
  }

  async update(dto: UpdateSizeDto, id: number) {
    await this.sizeRepository.update({ value: dto.value }, { where: { id: id } });
    return dto;
  }

  async delete(id: number) {
    return await this.sizeRepository.destroy({ where: { id: id } });
  }

  async deleteAll() {
    return this.sizeRepository.destroy({ where: {} });
  }
}
