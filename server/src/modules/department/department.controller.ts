import { UpdateDepartmentDto } from './dto/update-department.dto';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { Department as DepartmentModel } from './models/department.model';
import { DepartmentService } from './department.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  create(@Body() dto: CreateDepartmentDto): Promise<DepartmentModel> {
    return this.departmentService.create(dto);
  }

  @Get()
  findAll() {
    return this.departmentService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: number) {
    return this.departmentService.findOneById(id);
  }

  @Get('/slug/:slug')
  findOneBySlug(@Param('slug') slug: string) {
    return this.departmentService.findOneBySlug(slug);
  }

  @Get('type/:slug')
  findOneByType(@Param('slug') slug: string) {
    return this.departmentService.findOneByType(slug);
  }

  @Patch(':id')
  update(@Body() dto: UpdateDepartmentDto, @Param('id') id: number) {
    return this.departmentService.update(dto, id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.departmentService.delete(id);
  }

  @Delete()
  deleteAll() {
    return this.departmentService.deleteAll();
  }
}
