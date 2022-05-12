import { Module } from '@nestjs/common';
import { ColorService } from './color.service';
import { ColorController } from './color.controller';
import { colorProvider } from './color.provider';

@Module({
  providers: [ColorService, ...colorProvider],
  controllers: [ColorController],
  exports: [ColorService],
})
export class ColorModule {}
