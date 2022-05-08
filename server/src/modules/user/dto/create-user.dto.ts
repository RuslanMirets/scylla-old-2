import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Имя должно быть строкой' })
  @MinLength(1, { message: 'Введите имя' })
  readonly name: string;

  @IsEmail(undefined, { message: 'Некорректная почта' })
  readonly email: string;

  @IsString({ message: 'Пароль должен быть строкой' })
  @MinLength(6, { message: 'Пароль должен быть минимум 6 символов' })
  readonly password: string;
}
