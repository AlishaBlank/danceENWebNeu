// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeilnehmerComponent } from './teilnehmer/teilnehmer.component';
import { ChoreografienComponent } from './choreografien/choreografien.component';
import { LiederComponent } from './lieder/lieder.component';

const routes: Routes = [
  { path: 'teilnehmer', component: TeilnehmerComponent },
  { path: 'choreografien', component: ChoreografienComponent },
  { path: 'lieder', component: LiederComponent },
  { path: '', redirectTo: '/teilnehmer', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
