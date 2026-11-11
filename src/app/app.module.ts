import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { ScifiComponent } from './scifi/scifi.component';
import { HumorComponent } from './humor/humor.component';

@NgModule({
  declarations: [
    AppComponent,
    FooldalComponent,
    ScifiComponent,
    HumorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
