import { IsString, MinLength } from 'class-validator';

export class CreateTypeDto {
  @IsString({ message: 'Название должно быть строкой' })
  @MinLength(1, { message: 'Введите название' })
  readonly name: string;

  @IsString({ message: 'Описание должно быть строкой' })
  @MinLength(1, { message: 'Введите описание' })
  readonly description: string;
}
