import { OmitType } from '@nestjs/mapped-types';

import { Tasks } from '../entities/task.entity';

export class CreateTaskDto extends OmitType(Tasks, ['id'] as const) {}
