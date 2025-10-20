import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodosService } from './todos.service';
import type { Todo } from './todo.entity';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(): Todo[] {
    return this.todosService.findAll();
  }

  @Post()
  create(@Body('title') title: string): Todo {
    return this.todosService.create(title);
  }
}
