import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getUsers().subscribe((data => console.log(data)));
  }

}
