import { IsString, MinLength } from 'class-validator';

export class UpdateSizeDto {
  @IsString({ message: 'Значение должно быть строкой' })
  @MinLength(1, { message: 'Введите значение' })
  readonly value: string;
}
