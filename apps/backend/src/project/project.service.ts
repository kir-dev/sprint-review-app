import { Injectable } from '@nestjs/common';
import { Prisma, Projekt } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ProjektService {
  constructor(private readonly Prisma: PrismaService) {}

  async create(data: Prisma.ProjektCreateInput): Promise<Projekt> {
    return await this.Prisma.projekt.create({ data });
  }

  async findAll(): Promise<Projekt[]> {
    return await this.Prisma.projekt.findMany();
  }

  async findOne(id: number): Promise<Projekt> {
    return await this.Prisma.projekt.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.ProjektUpdateInput) {
    return await this.Prisma.projekt.update({ where: { id }, data });
  }

  async remove(id: number) {
    return await this.Prisma.projekt.delete({ where: { id } });
  }
}
