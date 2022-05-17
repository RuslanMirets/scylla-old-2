import { UpdateTypeDto } from './dto/update-type.dto';
import { Type as TypeModel } from './models/type.model';
import { TypeService } from './type.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { Observable, of } from 'rxjs';
import { join } from 'path';

export const storage = {
  storage: diskStorage({
    destination: './uploads/images/type',
    filename: (req, file, callback) => {
      const filename = uuidv4();
      const extension = file.originalname.split('.').pop();
      callback(null, `${filename}.${extension}`);
    },
  }),
};

@Controller('type')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', storage))
  create(
    @Body() dto: CreateTypeDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<TypeModel> {
    return this.typeService.create(dto, file.filename);
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

  @Get('/slug/:slug')
  findOneBySlug(@Param('slug') slug: string) {
    return this.typeService.findOneBySlug(slug);
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

  @Get('image/:imagename')
  findProfileImage(@Param('imagename') imagename, @Res() res): Observable<Object> {
    return of(res.sendFile(join(process.cwd(), 'uploads/images/type/' + imagename)));
  }
}
