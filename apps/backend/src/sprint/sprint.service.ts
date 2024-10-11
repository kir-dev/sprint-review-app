import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { CreateSprintDto } from './dto/create-sprint.dto';
import { UpdateSprintDto } from './dto/update-sprint.dto';
import { Sprint } from './entities/sprint.entity';

@Injectable()
export class SprintService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSprintDto: CreateSprintDto): Promise<Sprint> {
    try {
      const newSprint = await this.prisma.sprint.create({ data: createSprintDto });
      return newSprint;
    } catch (error) {
      throw new Error(`Sprint not created ${error.message}`);
    }
  }

  async findAll(): Promise<Sprint[]> {
    try {
      return this.prisma.sprint.findMany();
    } catch (error) {
      throw new NotFoundException(`Sprints not found ${error.message}`);
    }
  }

  async findOne(id: number): Promise<Sprint> {
    const sprint = await this.prisma.sprint.findUnique({ where: { id } });
    if (!sprint) {
      throw new NotFoundException(`Sprint with ID ${id} not found`);
    }
    return sprint;
  }

  async update(id: number, updateSprintDto: UpdateSprintDto): Promise<Sprint> {
    try {
      return await this.prisma.sprint.update({ where: { id }, data: updateSprintDto });
    } catch (error) {
      throw new NotFoundException(`Sprint with ID ${id} not found ${error.message}`);
    }
  }

  async remove(id: number): Promise<Sprint> {
    try {
      return await this.prisma.sprint.delete({ where: { id } });
    } catch (error) {
      throw new NotFoundException(`Sprint with ID ${id} not found ${error.message}`);
    }
  }
}
