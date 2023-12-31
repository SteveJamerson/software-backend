import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { StudentCreateDTO } from './dto/studentCreate.dto';
import { StudentUpdateDTO } from './dto/studentUpdate.dto';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}

    @Get()
    findAll() {
        return this.studentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.studentsService.findOne(id);
    }

    @Post()
    create(@Body() studentData: StudentCreateDTO) {
        return this.studentsService.create(studentData);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() studentData: StudentUpdateDTO) {
        return this.studentsService.update(id, studentData);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.studentsService.remove(id);
    }
}
