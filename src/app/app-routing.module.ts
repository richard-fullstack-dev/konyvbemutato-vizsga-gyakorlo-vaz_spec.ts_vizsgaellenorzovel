import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { HumorComponent } from './humor/humor.component';
import { ScifiComponent } from './scifi/scifi.component';

const routes: Routes = [
  { path: "fooldal", component: FooldalComponent },
  { path: "humor", component: HumorComponent },
  { path: "scifi", component: ScifiComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
