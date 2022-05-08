import { UserService } from 'src/modules/user/user.service';
import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';
import { RoleGuard } from 'src/core/guards/role.guard';
import { Role } from 'src/core/decorators/role-auth.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Role('ADMIN')
  // @UseGuards(JwtAuthGuard, RoleGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return this.userService.findOneById(req.user.id);
  }
}
