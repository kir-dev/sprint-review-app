import { PartialType } from '@nestjs/mapped-types';
import { CreateProjektDto } from './create-projekt.dto';

export class UpdateProjektDto extends PartialType(CreateProjektDto) {}
