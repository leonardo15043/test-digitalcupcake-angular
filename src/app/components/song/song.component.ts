import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  { data }  from '../../../assets/data/music.json';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  songs:any;

  constructor(
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .subscribe( params=>{
      this.songs = data[params["id_artist"]].albums[params["id_album"]].songs;
    })
  }

}
