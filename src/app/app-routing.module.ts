import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AlbumesComponent } from './components/albumes/albumes.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SongComponent } from './components/song/song.component';

const routes: Routes = [
  { path: 'songs/:id_artist/:id_album', component: SongComponent , canActivate: [ AuthGuardService ]},
  { path: 'albumes/:id', component: AlbumesComponent , canActivate: [ AuthGuardService ]},
  { path: 'home/:id', component: HomeComponent , canActivate: [ AuthGuardService ] },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
