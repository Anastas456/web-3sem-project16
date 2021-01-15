import { Input, Pipe, PipeTransform } from '@angular/core';
import { MyWorker } from '../models/worker.model';
import * as moment from 'moment';

@Pipe({
  name: 'sortWorkers'
})
export class SortWorkersPipe implements PipeTransform {
  @Input() workers:MyWorker[];

  transform(workers, sorting:string, reverse:boolean): any[] {
    if (workers==undefined){
      return workers;
    }
    if (sorting === 'byId' && reverse) {
      workers.sort(( a, b ) => a.id - b.id);
      workers.reverse();
    }
    else if (sorting === 'byId' && !reverse) {
      workers.sort(( a, b ) => a.id - b.id);
    }
    else if (sorting === 'byAge' && reverse) {
      workers.sort(( a, b ) => moment().diff(a.birth, 'years') - moment().diff(b.birth, 'years'));
      workers.reverse();
    }
    else if (sorting === 'byAge' && !reverse) {
      workers.sort(( a, b ) => moment().diff(a.birth, 'years') - moment().diff(b.birth, 'years'));
    }
    return workers;
    
  }

}
