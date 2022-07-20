import {Body, Controller, Get, Post} from '@nestjs/common';
import {ThoughtDto} from './thought.dto';
import {Thought} from './thought.interface';
import {ThoughtsService} from './thoughts.service';

@Controller('thoughts')
export class ThoughtsController {

  constructor(private thoughtsService: ThoughtsService) {}

  @Post()
  createThought(@Body() {  content, title }: ThoughtDto): ThoughtDto {
    return this.thoughtsService.createThought(content, title);
  }

  @Get()
  getThoughts(): Thought[] {
    return this.thoughtsService.getThoughts();
  }

}
