import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProjektModule } from './projekt/projekt.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule.forRoot({ isGlobal: true }), UserModule, ProjektModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
