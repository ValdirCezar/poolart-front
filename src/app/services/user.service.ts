import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../configurations/api_config';
import { Observable } from 'rxjs';
import { User } from '../models/user';

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
    return this.http.get<number>(url);
  }

  findAll(name: string): Observable<User[]> {
    const url = `${this.BASE_URL}/users/find-all-with-name/${name}/full`
    return this.http.get<User[]>(url);
  }

  sendRating(idUser: any, rating: number): Observable<any> {
    const url = `${this.BASE_URL}/reviews/${idUser}/${rating}`
    return this.http.get<any>(url);
  }

  findById(userId: any): Observable<User> {
    const url = `${this.BASE_URL}/users/username/${userId}`
    return this.http.get<User>(url);
  }

}
