import { Injectable } from '@nestjs/common';
import { Prisma, Project } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectService {
  constructor(private readonly Prisma: PrismaService) {}

  async create(data: CreateProjectDto, userId: string): Promise<Project> {
    return await this.Prisma.project.create({
      data: {
        name: data.name,
        description: data.description,
        projectManager: {
          connect: { id: userId },
        },
      },
    });
  }

  async findAll(): Promise<Project[]> {
    return await this.Prisma.project.findMany();
  }

  async findOne(id: number): Promise<Project> {
    return await this.Prisma.project.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.ProjectUpdateInput) {
    return await this.Prisma.project.update({ where: { id }, data });
  }

  async remove(id: number) {
    return await this.Prisma.project.delete({ where: { id } });
  }
}
