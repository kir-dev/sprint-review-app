import { OmitType } from '@nestjs/swagger';

import { Sprint } from '../entities/sprint.entity';

export class CreateSprintDto extends OmitType(Sprint, ['id']) {}
