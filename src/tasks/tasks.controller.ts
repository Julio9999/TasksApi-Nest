import { Body, ConflictException, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto, updateTaskDto } from 'src/dto/task.dto';
import { Task } from 'src/schemas/tasks.schema';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}

    @Get()
    async getAllTasks(){
        try{
            const tasks = await this.taskService.findAll();
            return tasks;
        }catch(error){
            throw Error;
        }
    }

    @Get(':id')
    async getById(@Param('id') id:string){
        let task:Task
         try {
            task = await this.taskService.findOne(id);
            if(!task) throw Error;
            return task;
        } catch (error) {
            if(!task) throw new NotFoundException('Task not found');
            throw Error;
        }
    }

    @Post()
    async createTask(@Body() task: createTaskDto){
        try {
             const newTask = await this.taskService.create(task);
             return newTask;
         } catch (error) {
            if(error.code === 11000){
                throw new ConflictException('Title already exists');
            }else {
                throw error;
            }
         }
    }

    @Put(':id')
    async updateTask(@Body() task: updateTaskDto, @Param('id') id: string){
        let updateTask: Task;
        try {
            updateTask = await this.taskService.update(id, task)
            return updateTask;
        } catch (error) {
            if(!updateTask) throw new NotFoundException('Task Not Found')
            throw Error;
        }
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string) {
        let deletedTask: Task;
        try {
            deletedTask = await this.taskService.delete(id);
            return deletedTask;
        } catch (error) {
            if(!deletedTask) throw new NotFoundException('Task Not Found')
            throw Error;
        }
    }
}
