import { Injectable } from '@xeito/injection';
import { WriteStore } from '@xeito/store';

@Injectable({
  selector: 'exampleService'
})
export class ExampleService {

  public $count: WriteStore<number> = new WriteStore<number>(0);

  greetMe(name: string): string | null {
    let greeting = `Hello ${name}`;
    if (!name) greeting = null;
    return greeting;
  }

  startAutomaticCount() {
    this.$count.set(0);	
    setInterval(() => {
      this.$count.set(this.$count.value + 1);
    }, 1000);
  }

}