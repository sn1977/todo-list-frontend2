import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http'; // Import the HttpClient module

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { } // Inject the HttpClient module

  public loginWithUsernameAndPassword(username: string, password: string) {
    const url = environment.baseURL + "/login/";
    const body = {
        username: username,
        password: password,
    };
    return lastValueFrom(this.http.post(url, body));
}
}
