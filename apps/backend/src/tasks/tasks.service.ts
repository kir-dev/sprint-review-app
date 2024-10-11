import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateTaskDto, userId: string) {
    return await this.prisma.tasks.create({
      data: {
        description: data.description,
        sprint: {
          connect: { id: data.sprintId },
        },
        user: {
          connect: { id: userId },
        },
        project: {
          connect: { id: data.projectId },
        },
      },
    });
  }

  async findAll() {
    try {
      return await this.prisma.tasks.findMany();
    } catch {
      throw new NotFoundException('Tasks not found');
    }
  }

  async findOne(id: number) {
    const task = await this.prisma.tasks.findUnique({
      where: { id },
    });
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    try {
      return await this.prisma.tasks.update({
        where: { id },
        data: updateTaskDto,
      });
    } catch {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.tasks.delete({
        where: { id },
      });
    } catch {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }
}
