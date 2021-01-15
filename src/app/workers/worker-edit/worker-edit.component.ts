import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyWorker, MyWorkerType } from 'src/app/shared/models/worker.model';
import { WorkerService } from 'src/app/shared/services/worker.service';

@Component({
  selector: 'app-worker-edit',
  templateUrl: './worker-edit.component.html',
  styleUrls: ['./worker-edit.component.css']
})
export class WorkerEditComponent implements OnInit {

  id:number;
  worker:MyWorker;
  workerForm:FormGroup;
  myWorkerType=MyWorkerType;
  
  mask = ['+', 7, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  constructor(private activetedRoute: ActivatedRoute,
    private workerService:WorkerService,
    private router:Router
    ) { 
    this.activetedRoute.params.subscribe(params =>{
        if (params.id !==null && params.id!==undefined){
        this.id=+params.id;
      }
      else{
        this.id=null;
      }
    })
  }

  ngOnInit(): void {
    this.workerForm= new FormGroup({
      name:new FormControl(null, [Validators.required]),
      surname:new FormControl(null, [Validators.required]),
      patronymic:new FormControl(null, [Validators.required]),
      phone:new FormControl(null, [Validators.required]),
      email:new FormControl(null, [Validators.required]),
      birth:new FormControl(null, [Validators.required]),
      type:new FormControl(0, [Validators.required])
    });
    this.getData();
  }

  async getData(){
      if(this.id !==null && this.id !==undefined){
      try{
        let worker=this.workerService.getOneById(this.id);
        this.worker= await worker;
      }
      catch(err){
        console.error(err);
      }
      this.workerForm.patchValue({
        name: this.worker.name,
        surname: this.worker.surname,
        patronymic: this.worker.patronymic,
        phone: this.worker.phone,
        email: this.worker.email,
        birth: this.worker.birth,
        type: this.worker.type
      })
    }
  }

  async onDelete(){
    try{
      await this.workerService.deleteOneById(this.id);
    }
    catch(err){
      console.error(err);
    }
    this.router.navigate(['/workers']);
  }

  async onSave(){
      if (this.id !==null && this.id !==undefined){
      try{
        await this.workerService.putOneById(this.id, this.workerForm.value);
      }
      catch(err){
        console.error(err);
      }
    }
    else{
      try{
        let res=await this.workerService.postOne(this.workerForm.value);
        this.router.navigate([this.router.url, res.id]);
        this.getData();
      }
      catch(err){
        console.error(err);
      }
    }
  }

}
