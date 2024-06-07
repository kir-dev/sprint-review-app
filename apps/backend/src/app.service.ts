import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getHello(): Promise<string> {
    return 'Hello World!';
  }

  async getExample(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
