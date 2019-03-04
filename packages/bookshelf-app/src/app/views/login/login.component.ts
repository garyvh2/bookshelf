import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";
import { UserService } from "../../services/user.service";
import { AppError } from "../../models/Error";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin: User = new User();
  userRegister: User = new User();
  errorLogin: AppError = new AppError();
  errorRegister: AppError = new AppError();
  saved: Boolean = false;
  saving: Boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.userService.login(this.userLogin).subscribe(
      user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['list']);
        } else {
          this.errorLogin = {
            message: 'Failed to login.'
          };
        }
      },
      () => (this.errorLogin = { message: 'The user does not exist.' })
    );
  }

  save() {
    this.saved = false;
    this.saving = true;
    this.userRegister.status = 'active';
    this.userService
      .addUser(this.userRegister)
      .subscribe(
        () => (
          (this.saved = true),
          (this.saving = false),
          this.router.navigate(['login'])
        ),
        ({ error }) => ((this.errorRegister = error), (this.saving = false))
      );
  }
}
