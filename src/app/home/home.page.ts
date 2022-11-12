import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  students: any;
  studentName: string;
  studentAge: number;
  studentAddress: string;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.readStudent()
      .subscribe(data => {
        console.log(data);
        this.students = data.map(e => {
          return {
            id: e.payload.doc.id,
            isEdit: false,
            Name: e.payload.doc.data()['Name'],
            Age: e.payload.doc.data()['Age'],
            Address: e.payload.doc.data()['Address']
          }
        })
      });
  }

  createRecord(): any {
    let record = {
      'Name': this.studentName,
      'Age': this.studentAge,
      'Address': this.studentAddress
    };

    this.crudService.createStudent(record)
      .then(res => {
        console.log(res);
        this.studentName = '';
        this.studentAge = null;
        this.studentAddress = '';
      })
      .catch(err => {
        alert('There was an error while trying to create the stuent');
        console.log(err);
      })
  }

  removeRecord(id): any {
    this.crudService.deleteStudent(id)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        alert('There was an error while trying to delete the stuent');
        console.log(err);
      });
  }
}
