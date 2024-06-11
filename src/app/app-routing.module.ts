// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeilnehmerComponent } from './teilnehmer/teilnehmer.component';
import { ChoreografienComponent } from './choreografien/choreografien.component';
import { LiederComponent } from './lieder/lieder.component';
import { AuthorizationService } from 'C:/Users/lisha/source/repos/danceENWebNeu/src/app/shared/authorization-service.service';
import { MyGuard } from './my.guard';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: 'teilnehmer', component: TeilnehmerComponent, canActivate: [MyGuard] },
  { path: 'login', component: LoginComponent },
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
