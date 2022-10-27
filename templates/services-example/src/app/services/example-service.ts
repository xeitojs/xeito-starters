import { Injectable } from '@xeito/injection';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ExampleService {

  public $count: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  greetMe(name: string): string | null {
    let greeting = `Hello ${name}`;
    if (!name) greeting = null;
    return greeting;
  }

  startAutomaticCount() {
    let count = 0;
    this.$count.next(count++);
    setInterval(() => {
      this.$count.next(count++);
    }, 1000);
  }

}