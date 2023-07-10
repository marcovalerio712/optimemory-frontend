import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginActivate } from './util/login.service';
import { DeckListComponent } from './components/deck-list/deck-list.component';
import { StudentDecksComponent } from './components/student-decks/student-decks.component';
import { CreateDeckComponent } from './components/create-deck/create-deck.component';

const routes: Routes = [
  { path: 'register', component: StudentRegistrationComponent},
  { path: 'login', component: StudentLoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'decks', component: DeckListComponent, canActivate: [LoginActivate] },
  { path: 'mydecks', component: StudentDecksComponent, canActivate: [LoginActivate]},
  { path: 'decks/new', component: CreateDeckComponent, canActivate: [LoginActivate]},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
