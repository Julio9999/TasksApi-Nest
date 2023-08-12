import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [TasksModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/tasksdb')],
})
export class AppModule {}
