import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  { data }  from '../../../assets/data/music.json';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent implements OnInit {

  albums:any;
  id_artist:any;

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {  
    this.activatedRoute.params
    .subscribe( params=>{
      this.id_artist = params["id"];
      this.albums = data[params["id"]].albums;
    })
  }

}
