import { Challenge } from '@/challenges/entities/challenge.entity';
import { Project } from '@/projects/entities/project.entity';
import { School } from '@/schools/entities/school.entity';
import { Task } from '@/tasks/entities/task.entity';
import { removeEmptyData } from '@/utils/functions/remove-empty';
import {
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

@Entity('students')
export class Student {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({
        unique: true,
        length: 11,
    })
    cpf: string;

    @ManyToMany(() => School, (school) => school.students)
    schools: School[];

    @OneToOne(() => Task, (task) => task.student)
    task: Task;

    @OneToOne(() => Challenge, (challenge) => challenge.student)
    challenge: Challenge;

    @OneToOne(() => Project, (project) => project.student)
    project: Project;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @BeforeInsert()
    generatedId() {
        if (this.id) return;
        this.id = uuid();
    }

    toJSON() {
        removeEmptyData(this);
        return this;
    }
}
