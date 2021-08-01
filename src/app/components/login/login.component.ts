import { Component } from '@angular/core';
import  { users }  from '../../../assets/data/users.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  name: any;
  alert = false;

  constructor(  public router: Router ) { }

  login(){
    let data = users.filter( (entry) => {
      return entry.username === this.name;
    });

    if(data.length == 0){
      this.alert = true;
    } else {
      localStorage.setItem("username",data[0].username);
      this.router.navigate(['/home',data[0].id]);
    }
  }

}
