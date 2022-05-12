import { UpdateBrandDto } from './dto/update-brand.dto';
import { CreateBrandDto } from './dto/create-brand.dto';
import { Brand as BrandModel } from './models/brand.model';
import { BrandService } from './brand.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  create(@Body() dto: CreateBrandDto): Promise<BrandModel> {
    return this.brandService.create(dto);
  }

  @Get()
  findAll() {
    return this.brandService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: number) {
    return this.brandService.findOneById(id);
  }

  @Patch(':id')
  update(@Body() dto: UpdateBrandDto, @Param('id') id: number) {
    return this.brandService.update(dto, id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.brandService.delete(id);
  }

  @Delete()
  deleteAll() {
    return this.brandService.deleteAll();
  }
}
