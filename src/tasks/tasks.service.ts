import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from 'src/schemas/tasks.schema';
import { createTaskDto, updateTaskDto } from 'src/dto/task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

    findAll(): Promise<Task[]> {
        return this.taskModel.find()
    }

    create(task: createTaskDto): Promise<Task>{
        return this.taskModel.create(task)
    }

    findOne(id: string): Promise<Task>{
        return this.taskModel.findById(id)
    }

    delete(id: string): Promise<Task>{
        return this.taskModel.findByIdAndDelete(id)
    }

    update(id: string, task: updateTaskDto): Promise<Task>{
        return this.taskModel.findByIdAndUpdate(id, task)
    }

}
