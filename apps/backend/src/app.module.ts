import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjektModule } from './project/project.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule.forRoot({ isGlobal: true }), UserModule, ProjektModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
