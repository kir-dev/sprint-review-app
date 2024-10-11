import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { AuthService } from 'src/user/auth.service';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @Post('login')
  async logIn(@Body() loginDto: { email: string; password: string }): Promise<User & { isRegistered: boolean }> {
    const user = await this.authService.signIn(loginDto.email, loginDto.password);
    return {
      ...user,
      isRegistered: Boolean(user),
    };
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(Number(id), updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(Number(id));
  }
}
