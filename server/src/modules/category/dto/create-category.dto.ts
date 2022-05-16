import { IsString, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString({ message: 'Название должно быть строкой' })
  @MinLength(1, { message: 'Введите название' })
  readonly name: string;

  @IsString({ message: 'Значение должно быть строкой' })
  @MinLength(1, { message: 'Введите значение' })
  readonly value: string;
}
