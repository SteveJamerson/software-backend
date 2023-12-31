import { DataSource, DataSourceOptions } from 'typeorm';
import { CreateSchoolsTable1695176535556 } from './migrations/1695176535556-CreateSchoolsTable';
import { CreateStudentsTable1695178505238 } from './migrations/1695178505238-CreateStudentsTable';
import { CreateSchoolsStudentsTable1695178700211 } from './migrations/1695178700211-CreateSchoolsStudentsTable';
import { AddCpfAndCnpjTable1695218323170 } from './migrations/1695218323170-AddCpfAndCnpjTable';
import { CreateTasksTable1695231248369 } from './migrations/1695231248369-CreateTasksTable';
import { CreateChallengesTable1695236943170 } from './migrations/1695236943170-CreateChallengesTable';
import { CreateProjectsTable1695241418197 } from './migrations/1695241418197-CreateProjectsTable';

const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'postgres',
    entities: [__dirname + '/../**/*.entity.js'],
    synchronize: false,
};

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                ...dataSourceOptions,
            });
            return dataSource.initialize();
        },
    },
];

export const dataSource = new DataSource({
    ...dataSourceOptions,
    migrations: [
        CreateSchoolsTable1695176535556,
        CreateStudentsTable1695178505238,
        CreateSchoolsStudentsTable1695178700211,
        AddCpfAndCnpjTable1695218323170,
        CreateTasksTable1695231248369,
        CreateChallengesTable1695236943170,
        CreateProjectsTable1695241418197,
    ],
});
