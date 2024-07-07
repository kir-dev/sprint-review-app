import { PartialType } from '@nestjs/mapped-types';

export interface UpdateUserDto extends PartialType(CreateUserDto) {}
