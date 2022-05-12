import { Module } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';
import { typeProvider } from './type.provider';

@Module({
  providers: [TypeService, ...typeProvider],
  controllers: [TypeController],
  exports: [TypeService],
})
export class TypeModule {}
