import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from 'src/app/classes/user';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private dataS: DataService) { }
  // dana obserwowalna (.subscribe(...))
  dane :BehaviorSubject<Object> = new BehaviorSubject<Object>({});

  ngOnInit(): void {
    this.list()
    // console.log("Przed");
    // this.fbCred.getFbCred().subscribe(a => this.dane.next(a))
    // this.dane.subscribe(z => console.log(z.valueOf()));
    // console.log("Za");
  }

  users: User[];
  name: string;

  save() {
    this.dataS.createUser({name: this.name} as User)
  }

  onKey(event: any) {
    this.name = event.target.value;
  }

  delete(key: string) {
    this.dataS.deleteUser(key);
  }

  list() {
    this.dataS.getUserList().snapshotChanges().pipe(
      map(change =>
        change.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(users => this.users = users)
  }
}
