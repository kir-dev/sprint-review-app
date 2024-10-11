import { OmitType } from '@nestjs/swagger';

import { Tasks } from '../entities/task.entity';

export class CreateTaskDto extends OmitType(Tasks, ['id'] as const) {}
