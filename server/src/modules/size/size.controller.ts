import { UpdateSizeDto } from './dto/update-size.dto';
import { CreateSizeDto } from './dto/create-size.dto';
import { SizeService } from './size.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Size as SizeModel } from './models/size.model';

@Controller('size')
export class SizeController {
  constructor(private readonly sizeService: SizeService) {}

  @Post()
  create(@Body() dto: CreateSizeDto): Promise<SizeModel> {
    return this.sizeService.create(dto);
  }

  @Get()
  findAll() {
    return this.sizeService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: number) {
    return this.sizeService.findOneById(id);
  }

  @Patch(':id')
  update(@Body() dto: UpdateSizeDto, @Param('id') id: number) {
    return this.sizeService.update(dto, id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.sizeService.delete(id);
  }

  @Delete()
  deleteAll() {
    return this.sizeService.deleteAll();
  }
}
