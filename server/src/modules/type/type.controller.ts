import { Type as TypeModel } from './models/type.model';
import { TypeService } from './type.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
