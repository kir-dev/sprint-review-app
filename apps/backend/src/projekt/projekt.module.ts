import { Module } from '@nestjs/common';

import { ProjektController } from './projekt.controller';
import { ProjektService } from './projekt.service';

@Module({
  controllers: [ProjektController],
  providers: [ProjektService],
})
export class ProjektModule {}
