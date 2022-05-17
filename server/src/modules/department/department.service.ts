import { UpdateDepartmentDto } from './dto/update-department.dto';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { Department } from './models/department.model';
import { DEPARTMENT_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';
import slugify from 'slugify';
import { Op } from 'sequelize';
import { Type } from '../type/models/type.model';

@Injectable()
export class DepartmentService {
  constructor(
    @Inject(DEPARTMENT_REPOSITORY) private readonly departmentRepository: typeof Department,
  ) {}

  async create(dto: CreateDepartmentDto): Promise<Department> {
    const slug = slugify(dto.name, { lower: true });
    return await this.departmentRepository.create<Department>({ ...dto, slug });
  }

  async findAll(): Promise<Department[]> {
    return await this.departmentRepository.findAll<Department>({ include: { all: true } });
  }

  async findAllById(id: number): Promise<Department[]> {
    return await this.departmentRepository.findAll({ where: { id } });
  }

  async findOneById(id: number): Promise<Department> {
    return await this.departmentRepository.findOne<Department>({
      where: { id },
      include: { all: true },
    });
  }

  async findOneBySlug(slug: string): Promise<Department> {
    return await this.departmentRepository.findOne<Department>({
      where: { slug },
      include: { all: true },
    });
  }

  async findOneByType(slug: string): Promise<Department> {
    return await this.departmentRepository.findOne<Department>({
      include: [{ model: Type, where: { slug: { [Op.eq]: slug } } }],
    });
  }

  async update(dto: UpdateDepartmentDto, id: number) {
    await this.departmentRepository.update({ name: dto.name }, { where: { id: id } });
    return dto;
  }

  async delete(id: number) {
    return await this.departmentRepository.destroy({ where: { id: id } });
  }

  async deleteAll() {
    return this.departmentRepository.destroy({ where: {} });
  }
}
