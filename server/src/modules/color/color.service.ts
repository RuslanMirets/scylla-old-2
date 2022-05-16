import { COLOR_REPOSITORY } from './../../core/constants/index';
import { UpdateColorDto } from './dto/update-color.dto';
import { CreateColorDto } from './dto/create-color.dto';
import { Color } from './models/color.model';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ColorService {
  constructor(@Inject(COLOR_REPOSITORY) private readonly colorRepository: typeof Color) {}

  async create(dto: CreateColorDto): Promise<Color> {
    return await this.colorRepository.create<Color>(dto);
  }

  async findAll(): Promise<Color[]> {
    return await this.colorRepository.findAll<Color>({ include: { all: true } });
  }

  async findOneById(id: number): Promise<Color> {
    return await this.colorRepository.findOne<Color>({ where: { id }, include: { all: true } });
  }

  async findAllById(id: number): Promise<Color[]> {
    return await this.colorRepository.findAll({ where: { id } });
  }

  async update(dto: UpdateColorDto, id: number) {
    await this.colorRepository.update({ name: dto.name }, { where: { id: id } });
    return dto;
  }

  async delete(id: number) {
    return await this.colorRepository.destroy({ where: { id: id } });
  }

  async deleteAll() {
    return this.colorRepository.destroy({ where: {} });
  }
}
