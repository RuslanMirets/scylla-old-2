import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './models/brand.model';
import { BRAND_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';

@Injectable()
export class BrandService {
  constructor(@Inject(BRAND_REPOSITORY) private readonly brandRepository: typeof Brand) {}

  async create(dto: CreateBrandDto): Promise<Brand> {
    return await this.brandRepository.create<Brand>(dto);
  }

  async findAll(): Promise<Brand[]> {
    return await this.brandRepository.findAll<Brand>({ include: { all: true } });
  }

  async findOneById(id: number): Promise<Brand> {
    return await this.brandRepository.findOne<Brand>({ where: { id }, include: { all: true } });
  }

  async update(dto: UpdateBrandDto, id: number) {
    await this.brandRepository.update({ name: dto.name }, { where: { id: id } });
    return dto;
  }

  async delete(id: number) {
    return await this.brandRepository.destroy({ where: { id: id } });
  }

  async deleteAll() {
    return this.brandRepository.destroy({ where: {} });
  }
}
