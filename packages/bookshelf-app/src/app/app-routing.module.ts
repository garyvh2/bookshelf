import { LandingComponent } from './views/landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { ListComponent } from './views/list/list.component';
import { AuthGuardService } from './services/authguard.service';
import { PostAddComponent } from './views/post-add/post-add.component';
import { PostComponent } from './views/post/post.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'postAdd',
    component: PostAddComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'list',
    component: ListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'post/:id',
    component: PostComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
