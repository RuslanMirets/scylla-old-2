import { UpdateTypeDto } from './dto/update-type.dto';
import { Type as TypeModel } from './models/type.model';
import { TypeService } from './type.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';

@Controller('type')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Post()
  create(@Body() dto: CreateTypeDto): Promise<TypeModel> {
    return this.typeService.create(dto);
  }

  @Get()
  findAll() {
    return this.typeService.findAll();
  }

  @Get('department/:slug')
  findAllByDepartment(@Param('slug') slug: string) {
    return this.typeService.findAllByDepartment(slug);
  }

  @Get(':id')
  findOneById(@Param('id') id: number) {
    return this.typeService.findOneById(id);
  }

  @Patch(':id')
  update(@Body() dto: UpdateTypeDto, @Param('id') id: number) {
    return this.typeService.update(dto, id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.typeService.delete(id);
  }

  @Delete()
  deleteAll() {
    return this.typeService.deleteAll();
  }
}
