import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config';
import { User } from './entities/User';

const DatabaseModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: config.port,
  username: config.username,
  password: config.password,
  database: config.database,
  entities: [User],
  synchronize: true,
});

export { DatabaseModule };
