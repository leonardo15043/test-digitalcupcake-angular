import { Component, Input, OnInit } from '@angular/core';
import  { users }  from '../../../assets/data/users.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data:any;
  constructor() { }

  ngOnInit(): void {
    this.data = users.filter( (entry) => {
      return entry.id == Number(localStorage.getItem("id_user"));
    });
  }

}
