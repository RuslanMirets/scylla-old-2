import { IsString, MinLength } from 'class-validator';

export class CreateRoleDto {
  @IsString({ message: 'Значение должно быть строкой' })
  @MinLength(1, { message: 'Введите значение' })
  readonly value: string;

  @IsString({ message: 'Описание должно быть строкой' })
  @MinLength(1, { message: 'Введите описание' })
  readonly description: string;
}
