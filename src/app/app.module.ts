import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavigationComponent } from './navigation/navigation.component';
import { TeilnehmerComponent } from './teilnehmer/teilnehmer.component';
import { ChoreografienComponent } from './choreografien/choreografien.component';
import { LiederComponent } from './lieder/lieder.component';
import { TeilnehmerService } from './shared/teilnehmer.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TeilnehmerComponent,
    ChoreografienComponent,
    LiederComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync(),
    TeilnehmerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
