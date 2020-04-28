import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Users, User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private client: HttpClient) { }

  getUsers() {
    return this.client.get('https://jsonplaceholder.typicode.com/users')
    // .subscribe(
    //   (data) => {
    //     let usersAny: Array<User> = Array.from(data as Array<User>);
    //     // usersAny.map((u) => users.push({ id: u['id'], name: u['name'] } as User));
    //     // console.log(users);
    //     console.log(usersAny);

    //   },
    //   error => console.error(error)
    // );
  }
}
