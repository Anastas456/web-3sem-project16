import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'workerDepartment'
})
export class WorkerDepartmentPipe implements PipeTransform {

  transform(type:number): string {
    if (type==0){
      return 'IT отдел';
    }
    else if (type==1){
      return 'Отдел продаж';
    }
    else if (type==2){
      return 'Отдел доставки';
    }
    else if (type==3){
      return 'Юридический отдел';
    }
  }

}
