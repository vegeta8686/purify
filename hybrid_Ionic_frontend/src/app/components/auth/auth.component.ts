/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  registerForm: any;
  loginForm: any;
  type: string;
  ngOnInit() {
    this.route.params.subscribe((data: Params) => {
      this.type = data.type;
    });

    // Intializing the login and register forms
    this.intlLogin();
    this.intlRegister();

  }
  // initializing the register form
  intlRegister(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      role: ['USER'],
      mobileNo: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      password: [''],
      address: ['']
      // address: this.formBuilder.group({
      //   address1: [''],
      //   address2: [''],
      //   state: [''],
      //   city: [''],
      //   zip: ['']
      // })

    });
  }
  //initializing the log in form
  intlLogin(): void {
    this.loginForm = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['']
    });
  }
  // creating a method to post the login credentials to auth service
  login(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((res) => {
        if (res.status !== 401) {
          this.tokenService.saveToken(res);
          // this.registerForm.reset();
          // this.router.navigateByUrl('/home');
        } else { this.router.navigateByUrl('/auth'); };
      }, error => {
        this.router.navigateByUrl('/auth');
        console.log(error);
      }
      );
    }
  }

  // creating a method to post the new user  to auth service
  register(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(() => {
        this.router.navigateByUrl('/auth');
        this.registerForm.reset();
      }, error => {

        this.router.navigateByUrl('/auth');
        console.log(error);
      }
      );
    }
    console.log(this.registerForm.value);
  }
}
