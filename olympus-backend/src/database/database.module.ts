import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User';
import { config } from '../config';

export const DatabaseModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: config.databasePort,
  username: config.databaseUsername,
  password: config.databasePassword,
  database: config.databaseName,
  entities: [User],
  synchronize: true,
});
