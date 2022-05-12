import { IsString, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString({ message: 'Название должно быть строкой' })
  @MinLength(1, { message: 'Введите название' })
  readonly name: string;
}
