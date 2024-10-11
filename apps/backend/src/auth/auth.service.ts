import { AuthSchProfile } from '@kir-dev/passport-authsch';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}
  async updateOrCreateUser(userProfile: AuthSchProfile): Promise<User> {
    const user = await this.prisma.user.upsert({
      where: { id: userProfile.authSchId },
      update: { lastname: userProfile.lastName, firstname: userProfile.firstName, email: userProfile.email },
      create: {
        lastname: userProfile.lastName,
        firstname: userProfile.firstName,
        id: userProfile.authSchId,
        email: userProfile.email,
      },
    });
    return user;
  }
  login(user: User): string {
    return this.jwtService.sign(user, {
      secret: '<your secret>',
      expiresIn: '7 days',
    });
  }
}
