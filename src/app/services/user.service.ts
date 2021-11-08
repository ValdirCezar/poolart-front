import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../configurations/api_config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = API_CONFIG.BASE_URL

  constructor(
    private http: HttpClient
  ) { }

  findNumberOfUserByName(name: string): Observable<number> {
    const url = `${this.BASE_URL}/users/find-all-with-name/${name}`
    console.log(url);
    
    return this.http.get<number>(url);
  }
  
}
