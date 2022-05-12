import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { brandProvider } from './brand.provider';

@Module({
  providers: [BrandService, ...brandProvider],
  controllers: [BrandController],
  exports: [BrandService],
})
export class BrandModule {}
