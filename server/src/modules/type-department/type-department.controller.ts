import { TypeDepartment as TypeDepartmentModel } from 'src/modules/type-department/models/type-department.model';
import { TypeDepartmentService } from './type-department.service';
import { Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Type } from 'src/core/decorators/type.decorator';
import { Department } from 'src/core/decorators/department.decorator';
import { diskStorage } from 'multer';
import { join } from 'path';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { FileInterceptor } from '@nestjs/platform-express';

export const storage = {
  storage: diskStorage({
    destination: './uploads/images/type-department',
    filename: (req, file, callback) => {
      const filename = uuidv4();
      const extension = file.originalname.split('.').pop();
      callback(null, `${filename}.${extension}`);
    },
  }),
};

@Controller('type-department')
export class TypeDepartmentController {
  constructor(private readonly tdService: TypeDepartmentService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', storage))
  create(
    @Type() typeId: number,
    @Department() departmentId: number,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<TypeDepartmentModel> {
    return this.tdService.create(typeId, departmentId, file.filename);
  }

  @Get()
  findAll() {
    return this.tdService.findAll();
  }

  @Get('image/:imagename')
  findProfileImage(@Param('imagename') imagename, @Res() res): Observable<Object> {
    return of(res.sendFile(join(process.cwd(), 'uploads/images/type-department/' + imagename)));
  }
}
