export interface MyWorker{
    id?:number,
    name: string;
    surname: string;
    patronymic:string;
    phone:string;
    email:string;
    birth:string;
    type: number;
    
}
    
export enum MyWorkerType{
    it,
    sales,
    delivery,
    lawyers
}