import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User';
import { config } from '../config';
import { Profile } from './entities/Profile';
import { PersonalInfo } from './entities/PersonalInfo';

export const DatabaseModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: config.databasePort,
  username: config.databaseUsername,
  password: config.databasePassword,
  database: config.databaseName,
  entities: [User, Profile, PersonalInfo],
  synchronize: true,
});
