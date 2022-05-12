import { Module } from '@nestjs/common';
import { SizeService } from './size.service';
import { SizeController } from './size.controller';
import { sizeProvider } from './size.provider';

@Module({
  providers: [SizeService, ...sizeProvider],
  controllers: [SizeController],
  exports: [SizeService],
})
export class SizeModule {}
