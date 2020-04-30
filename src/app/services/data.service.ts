import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Users, User } from '../classes/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataRef: AngularFireList<User>;

  constructor(private client: HttpClient, private db: AngularFireDatabase) {
    this.dataRef = db.list('users');
  }

  createUser (user: User) {
    this.dataRef.push(user);
  }

  getUserList () {
    return this.dataRef;
  }

  deleteUser (key: string): Promise<void> {
    return this.dataRef.remove(key);
  }

  // get data from url json file
  getUsers() {
    return this.client.get('https://jsonplaceholder.typicode.com/users');
  }
}
