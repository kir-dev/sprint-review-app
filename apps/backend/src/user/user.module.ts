import { Module } from '@nestjs/common';

import { AuthService } from './auth.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, AuthService],
})
export class UserModule {}
