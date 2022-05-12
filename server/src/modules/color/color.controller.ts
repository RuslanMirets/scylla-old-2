import { UpdateColorDto } from './dto/update-color.dto';
import { CreateColorDto } from './dto/create-color.dto';
import { Color as ColorModel } from './models/color.model';
import { ColorService } from './color.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('color')
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

  @Post()
  create(@Body() dto: CreateColorDto): Promise<ColorModel> {
    return this.colorService.create(dto);
  }

  @Get()
  findAll() {
    return this.colorService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: number) {
    return this.colorService.findOneById(id);
  }

  @Patch(':id')
  update(@Body() dto: UpdateColorDto, @Param('id') id: number) {
    return this.colorService.update(dto, id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.colorService.delete(id);
  }

  @Delete()
  deleteAll() {
    return this.colorService.deleteAll();
  }
}
