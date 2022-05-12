export class CreateTypeDto {}
import { IsString, MinLength } from 'class-validator';

export class CreateRoleDto {
  @IsString({ message: 'Название должно быть строкой' })
  @MinLength(1, { message: 'Введите название' })
  readonly name: string;
}
