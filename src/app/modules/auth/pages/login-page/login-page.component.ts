import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{
  errorSession:boolean = false
  formLogin:FormGroup = new FormGroup({})

  constructor(private _authService: AuthService, private _cookieService: CookieService) {

  }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required, 
          Validators.email
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6)
        ])
      }
    )  
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value

    this._authService.sendCredentials(email, password)
                     .subscribe(responseOk => {
                      console.log('Session started correctly')
                      const {tokenSession, data} = responseOk
                      this._cookieService.set('token', tokenSession, 4, '/')
                     },
                     err => {
                      this.errorSession = true
                      console.log('Logging error')
                     })
  } 
}
