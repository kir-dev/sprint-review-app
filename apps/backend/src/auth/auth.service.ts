import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  saltOrRounds: number = 10;

  constructor(private usersService: UserService) {}

  async signIn(email, pass) {
    const user = await this.usersService.findOneByEMail(email);
    if (user?.password !== pass) {
      const isMatch = await bcrypt.compare(pass, user?.password);

      if (!isMatch) {
        throw new UnauthorizedException();
      }

      return user;
    }
  }

  async signUp(payload: CreateUserDto) {
    const hashPass = await bcrypt.hash(payload.password, this.saltOrRounds);

    const user = {
      sureName: payload.surName,
      foreName: payload.foreName,
      password: hashPass,
      email: payload.email,
    };

    this.usersService.create(user);
  }
}