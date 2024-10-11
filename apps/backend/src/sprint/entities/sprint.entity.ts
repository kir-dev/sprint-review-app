import { IsDate, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class Sprint {
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsDate()
  @IsNotEmpty()
  startDate: Date;

  @IsDate()
  @IsOptional()
  endDate: Date;
}
