import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User';
import { Profile } from './entities/Profile';
import { PersonalInfo } from './entities/PersonalInfo';
import config from '../config.json';

export const DatabaseModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: config.databasePort,
  username: config.databaseUsername,
  password: config.databasePassword,
  database: config.databaseName,
  entities: [User, Profile, PersonalInfo],
  synchronize: true,
  dropSchema: true,
});
