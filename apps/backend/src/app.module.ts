import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SprintModule } from './sprint/sprint.module';

@Module({
  imports: [PrismaModule.forRoot({ isGlobal: true }), SprintModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
