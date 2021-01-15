import { Input, Pipe, PipeTransform } from '@angular/core';
import { MyWorker } from 'src/app/shared/models/worker.model';

@Pipe({
  name: 'searchWorker'
})
export class SearchWorkerPipe implements PipeTransform {
  @Input() workers:MyWorker[];

  transform(workers, searchStr:string): any {
    if (searchStr === '' || searchStr==undefined) {
      return workers;
    } 
    else {
      let filteredItems = workers.filter(
        (worker) => (worker.name.toLowerCase().indexOf(searchStr.toLowerCase()) !==-1 || 
              worker.surname.toLowerCase().indexOf(searchStr.toLowerCase()) !==-1)
      );
      return filteredItems;
    }
  
  }

}
