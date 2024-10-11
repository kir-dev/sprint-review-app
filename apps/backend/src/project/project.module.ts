import { Module } from '@nestjs/common';

import { ProjektController } from './project.controller';
import { ProjektService } from './project.service';

@Module({
  controllers: [ProjektController],
  providers: [ProjektService],
})
export class ProjektModule {}
