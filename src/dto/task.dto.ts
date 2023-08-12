import { IsString, IsBoolean, IsOptional, IsNotEmpty } from "class-validator";

export class updateTaskDto {
    @IsOptional() 
    @IsString()
    title?: string;
    @IsString()
    @IsOptional()
    description?: string;
    @IsBoolean()
    @IsOptional()
    done?: boolean;
}

export class createTaskDto  {
    @IsString()
    title: string;
    @IsString()
    description: string;
    @IsBoolean()
    done: boolean
}


   