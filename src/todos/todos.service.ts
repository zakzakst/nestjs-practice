import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  create(title: string): Promise<Todo> {
    return this.prisma.todo.create({
      data: { title },
    });
  }
}
