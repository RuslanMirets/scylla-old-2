import { IsString, MaxLength, MinLength, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'Название должно быть строкой' })
  @MinLength(1, { message: 'Введите название' })
  readonly title: string;

  @IsNotEmpty({ message: 'Введите цену' })
  readonly price: number;

  @MaxLength(1234, { message: 'Введите описание, максимальная длина 150 знаков' })
  readonly description: string;
}
