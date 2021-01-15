import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyWorker} from 'src/app/shared/models/worker.model';
import { WorkerService } from 'src/app/shared/services/worker.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit {

  workers:MyWorker[];
  searchStr:'';
  sorting='byId';
  reverse=false;

  constructor(private workerService:WorkerService,
    private router:Router) { }

  ngOnInit(): void {
    this.getData();
  }



  async getData(){
    try{
      let workers= this.workerService.getAll();
      this.workers = (await workers === null)||(await workers === undefined) ? [] : await workers;
    }
    catch(err){
      console.error(err);
    }
  }

  onAddProfile(){
    this.router.navigate([this.router.url, 'profile']);
  }

  onLinkProfile(id:number){
    this.router.navigate([this.router.url, 'profile', id]);
  }

  async onDeleteList(id:number){
    try{
      await this.workerService.deleteOneById(id);
    }
    catch(err){
      console.error(err);
    }
    this.getData();
  }

}
