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
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { AnwesenheitslisteComponent } from './anwesenheitsliste/anwesenheitsliste.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthorizationService } from './shared/authorization-service.service';
import { AddLinkDialogComponent } from './add-link-dialog/add-link-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddColumnDatePickerDialogComponent } from './add-column-date-picker-dialog/add-column-date-picker-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { LOCALE_ID } from '@angular/core';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TeilnehmerComponent,
    ChoreografienComponent,
    LiederComponent,
    AnwesenheitslisteComponent,
    LoginComponent,
    AddLinkDialogComponent,
    AddColumnDatePickerDialogComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatSliderModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    provideAnimationsAsync(),
    TeilnehmerService,
    AuthorizationService,
    { provide: MAT_DATE_LOCALE, useValue: 'de-DE' },
    { provide: LOCALE_ID, useValue: 'de-DE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
