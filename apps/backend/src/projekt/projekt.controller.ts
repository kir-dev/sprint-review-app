import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjektService } from './projekt.service';
import { CreateProjektDto } from './dto/create-projekt.dto';
import { UpdateProjektDto } from './dto/update-projekt.dto';

@Controller('projekt')
export class ProjektController {
  constructor(private readonly projektService: ProjektService) {}

  @Post()
  create(@Body() createProjektDto: CreateProjektDto) {
    return this.projektService.create(createProjektDto);
  }

  @Get()
  findAll() {
    return this.projektService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projektService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjektDto: UpdateProjektDto) {
    return this.projektService.update(+id, updateProjektDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projektService.remove(+id);
  }
}
