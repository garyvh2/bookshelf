import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatChipsModule,
  MatIconModule,
  MatAutocompleteModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TagsChipListComponent } from './shared/components/tags-chip-list/tags-chip-list.component';
import { LoginComponent } from './views/login/login.component';
import { ListComponent } from './views/list/list.component';
import { AuthGuardService } from './services/authguard.service';
import { AuthService } from './services/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    TagsChipListComponent,
    LoginComponent,
    ListComponent
  ],
  imports: [
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
