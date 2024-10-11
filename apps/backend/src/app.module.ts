import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule.forRoot({ isGlobal: true }), UserModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
