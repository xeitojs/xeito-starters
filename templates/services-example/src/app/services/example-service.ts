import { Injectable } from '@xeito/injection';
import { Subject } from 'rxjs';

@Injectable()
export class ExampleService {

  public $count: Subject<number> = new Subject<number>();

  greetMe(name: string): string {
    const greeting = `Hello ${name}`;
    this.previousValue = greeting;
    return greeting;
  }

  startAutomaticCount() {
    let count = 0;
    setInterval(() => {
      this.$count.next(count++);
    }, 1000);
  }

}