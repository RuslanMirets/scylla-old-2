import { CreateBrandDto } from './dto/create-brand.dto';
import { Brand as BrandModel } from './models/brand.model';
import { BrandService } from './brand.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

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
}
