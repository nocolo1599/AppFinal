import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private fireStore: AngularFirestore) {

  }

  createStudent(record): any {
    return this.fireStore.collection('Student').add(record);
  }

  readStudent(): any {
    return this.fireStore.collection('Student').snapshotChanges();

  }

  updateStudent(): any {

  }

  deleteStudent(id): any {
    return this.fireStore.doc('Student/' + id).delete();
  }
}
