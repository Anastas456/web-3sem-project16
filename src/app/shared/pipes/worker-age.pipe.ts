import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'workerAge'
})
export class WorkerAgePipe implements PipeTransform {

  transform(birth:string): number {
    return moment().diff(birth, 'years'); 
  }

}
