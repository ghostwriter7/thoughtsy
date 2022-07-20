import { Module } from '@nestjs/common';
import {ThoughtsModule} from './thoughts/thoughts.module';

@Module({
  imports: [ThoughtsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
