import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  private todos: Todo[] = [
    { id: 1, title: 'NestJSの環境構築', completed: true },
    { id: 2, title: 'ToDo APIの作成', completed: false },
  ]

  findAll(): Todo[] {
    return this.todos;
  }

  create(title: string): Todo {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      title,
      completed: false,
    }
    this.todos.push(newTodo);
    return newTodo;
  }
}
