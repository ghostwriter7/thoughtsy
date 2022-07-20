import {Injectable} from '@nestjs/common';
import {Thought} from './thought.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ThoughtsService {
  thoughts: Thought[] = [];

  createThought(content: string, title: string): Thought {
    const newThought: Thought = {
      content,
      id: uuid(),
      title
    }
    this.thoughts.push(newThought);
    return newThought;
  }

  getThoughts(): Thought[] {
    return this.thoughts;
  }
}
