import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [TodosModule, ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
