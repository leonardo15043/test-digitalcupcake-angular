import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  { users }  from '../../../assets/data/users.json';
import  { data }  from '../../../assets/data/music.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  user:any;
  music = data;

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { 

    this.activatedRoute.params
    .subscribe( params=>{
      this.user = users.filter( (entry) => {
        return entry.id == params["id"];
      });
    })

  }


}
