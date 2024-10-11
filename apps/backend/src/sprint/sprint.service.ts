import { Injectable } from '@nestjs/common';

@Injectable()
export class SprintService {
  create() {
    return 'This action adds a new sprint';
  }

  findAll() {
    return `This action returns all sprint`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sprint`;
  }

  update(id: number) {
    return `This action updates a #${id} sprint`;
  }

  remove(id: number) {
    return `This action removes a #${id} sprint`;
  }
}
