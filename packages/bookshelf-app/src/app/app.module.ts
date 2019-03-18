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
  MatTabsModule,
  MatSelectModule,
  MatRadioModule
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
import { LandingComponent } from './views/landing/landing.component';
import { ListingComponent } from './shared/components/listing/listing.component';
import { StarRatingModule } from 'angular-star-rating';
import { UserRatingComponent } from './shared/components/user-rating/user-rating.component';
import { DetailSpecComponent } from './shared/components/detail-spec/detail-spec.component';
import { DetailLikeComponent } from './shared/components/detail-like/detail-like.component';
import { Ng5SliderModule } from 'ng5-slider';
import { RangeComponentComponent } from './shared/components/range-component/range-component.component';
import { FilterAmountComponent } from './shared/components/filter-amount/filter-amount.component';

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
    CommentsBoxDetailComponent,
    LandingComponent,
    ListingComponent,
    UserRatingComponent,
    DetailSpecComponent,
    DetailLikeComponent,
    RangeComponentComponent,
    FilterAmountComponent
  ],
  imports: [
    HttpClientModule,
    StarRatingModule.forRoot(),
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    Ng5SliderModule,
    MatRadioModule,
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
