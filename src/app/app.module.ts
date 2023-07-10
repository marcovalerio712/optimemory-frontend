import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app-component/app.component';
import { LeitnerHeaderComponent } from './components/leitner-header/leitner-header.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { FormsModule } from '@angular/forms';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginActivate } from './util/login.service';
import { DeckComponent } from './components/deck/deck.component';
import { DeckListComponent } from './components/deck-list/deck-list.component';
import { StudentDecksComponent } from './components/student-decks/student-decks.component';
import { CreateDeckComponent } from './components/create-deck/create-deck.component';
import { CreateFlashcardComponent } from './components/create-flashcard/create-flashcard.component';

@NgModule({
  declarations: [
    AppComponent,
    LeitnerHeaderComponent,
    StudentRegistrationComponent,
    StudentLoginComponent,
    HomeComponent,
    DeckComponent,
    DeckListComponent,
    StudentDecksComponent,
    CreateDeckComponent,
    CreateFlashcardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginActivate],
  bootstrap: [AppComponent]
})
export class AppModule { }

