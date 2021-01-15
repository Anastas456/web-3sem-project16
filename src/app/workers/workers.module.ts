import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkersRoutingModule } from './workers-routing.module';
import { WorkersComponent } from './workers.component';
import { WorkerListComponent } from './worker-list/worker-list.component';
import { WorkerEditComponent } from './worker-edit/worker-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkerDepartmentPipe } from '../shared/pipes/worker-department.pipe';
import { TextMaskModule } from 'angular2-text-mask';
import { SearchWorkerPipe } from '../shared/pipes/search-worker.pipe';
import { WorkerAgePipe } from '../shared/pipes/worker-age.pipe';
import { SortWorkersPipe } from '../shared/pipes/sort-workers.pipe';


@NgModule({
  declarations: [
    WorkersComponent, 
    WorkerListComponent, 
    WorkerEditComponent,
    WorkerDepartmentPipe,
    SearchWorkerPipe,
    WorkerAgePipe,
    SortWorkersPipe
  ],
  imports: [
    CommonModule,
    WorkersRoutingModule,
    ReactiveFormsModule,
    TextMaskModule,
    FormsModule
  ]
})
export class WorkersModule { }
