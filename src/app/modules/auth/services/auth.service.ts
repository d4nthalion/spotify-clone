import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.apiUrl
  constructor(private http:HttpClient, private cookie: CookieService) {}

  sendCredentials(email:string, password: string): Observable<any> {
    const body= {
      email: email,
      password: password
    }
    return this.http.post(`${this.URL}/auth/login`, body)
  }
}
