import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  taskObj : number = new number();
  numberArr : number[] = [];

  addnumberValue : string = '';
  editnumberValue : string = '';

  constructor(private crudService : CrudService) { }

  ngOnInit(): void {
    this.editnumberValue = '';
    this.addnumberValue = '';
    this.numberObj = new number();
    this.numberArr = [];
    this.getAllnumber();
  }
  getAllnumber() {
    this.crudService.getAllnumber().subscribe(res => {
      this.numberArr = res;
    }, err => {
      alert("Unable to get list of numbers");
    });
  }

  addnumber() {
    this.numberObj.number_name = this.addnumberValue;
    this.crudService.addnumber(this.numberObj).subscribe(res => {
      this.ngOnInit();
      this.addnumberValue = '';
    }, err => {
      alert(err);
    })
  }

  editnumber() {
    this.numberObj.number_name = this.editnumberValue;
    this.crudService.editnumber(this.numberObj).subscribe(res => {
      this.ngOnInit();
    }, err=> {
      alert("Failed to update number");
    })
  }

  deletenumber(etask : Task) {
    this.crudService.deleteTask(etask).subscribe(res => {
      this.ngOnInit();
    }, err=> {
      alert("Failed to delete task");
    });
  }

  call(etask : Task) {
    this.taskObj = etask;
    this.editTaskValue = etask.task_name;
  }


}
