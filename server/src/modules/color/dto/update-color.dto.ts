import { IsString, MinLength } from 'class-validator';

export class UpdateColorDto {
  @IsString({ message: 'Название должно быть строкой' })
  @MinLength(1, { message: 'Введите название' })
  readonly name: string;
}
