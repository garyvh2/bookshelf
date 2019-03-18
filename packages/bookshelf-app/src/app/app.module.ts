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
  MatAutocompleteModule,
  MatDividerModule,
  MatToolbarModule,
  MatTabsModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TagsChipListComponent } from './shared/components/tags-chip-list/tags-chip-list.component';
import { LoginComponent } from './views/login/login.component';
import { ListComponent } from './views/list/list.component';
import { AuthGuardService } from './services/authguard.service';
import { AuthService } from './services/auth.service';
import { PostAddComponent } from './views/post-add/post-add.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { PostDetailComponent } from './shared/components/post-detail/post-detail.component';
import { PostComponent } from './views/post/post.component';
import { CommentsBoxComponent } from './shared/components/comments-box/comments-box.component';
import { CommentsBoxAddComponent } from './shared/components/comments-box-add/comments-box-add.component';
import { CommentsBoxDetailComponent } from './shared/components/comments-box-detail/comments-box-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TagsChipListComponent,
    LoginComponent,
    ListComponent,
    PostAddComponent,
    PostDetailComponent,
    PostComponent,
    CommentsBoxComponent,
    CommentsBoxAddComponent,
    CommentsBoxDetailComponent
  ],
  imports: [
    HttpClientModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatDividerModule,
    MatChipsModule,
    MatIconModule,
    CKEditorModule,
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
