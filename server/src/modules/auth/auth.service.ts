import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RoleService } from '../role/role.service';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly roleService: RoleService,
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.userService.findOneByEmail(username);
    if (!user) {
      return null;
    }

    const match = await this.comparePassword(pass, user.password);
    if (!match) {
      return null;
    }

    const { password, ...result } = user['dataValues'];
    return result;
  }

  public async login(user) {
    const token = await this.generateToken(user);
    const { password, ...userData } = user;
    return { ...userData, token };
  }

  public async register(user) {
    const pass = await this.hashPassword(user.password);

    const newUser = await this.userService.create({ ...user, password: pass });

    const role = await this.roleService.findOneByValue('USER');
    await newUser.$set('role', role.id);

    const { password, ...userData } = newUser['dataValues'];

    const token = await this.generateToken(userData);

    return { ...userData, token };
  }

  private async generateToken(user: { id: number; email: string; role: string[] }) {
    const payload = { id: user.id, email: user.email, role: user.role };
    const token = await this.jwtService.signAsync(payload);
    return token;
  }

  private async hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  private async comparePassword(enteredPassword, dbPassword) {
    const match = await bcrypt.compare(enteredPassword, dbPassword);
    return match;
  }
}
