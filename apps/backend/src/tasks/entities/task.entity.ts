import { IsDate, IsInt, IsOptional, IsString } from 'class-validator';

export class Tasks {
  @IsInt()
  id: number;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt()
  sprintId: number;

  @IsInt()
  userId: number;

  @IsInt()
  projectId: number;

  @IsDate()
  createdAt: Date;
}
