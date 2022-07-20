import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {environment} from '../environments/environment';
import {ThoughtsModule} from './thoughts/thoughts.module';

@Module({
  imports: [ThoughtsModule,
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: environment.DB_USER,
    password: environment.DB_PASSWORD,
    database: environment.DB_NAME,
    entities: [],
    synchronize: true
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
