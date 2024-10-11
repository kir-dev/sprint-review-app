import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateSprintDto } from './dto/create-sprint.dto';
import { UpdateSprintDto } from './dto/update-sprint.dto';
import { SprintService } from './sprint.service';

@Controller('sprint')
export class SprintController {
  constructor(private readonly sprintService: SprintService) {}

  @Post()
  create(@Body() createSprintDto: CreateSprintDto) {
    return this.sprintService.create(createSprintDto);
  }

  @Get()
  findAll() {
    return this.sprintService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sprintService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSprintDto: UpdateSprintDto) {
    return this.sprintService.update(Number(id), updateSprintDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sprintService.remove(Number(id));
  }
}
