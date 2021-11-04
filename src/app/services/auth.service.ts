import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { API_CONFIG } from '../configurations/api_config';
import { Credentials } from '../models/credentials';
import { ArtistService } from 'src/app/services/artist.service';
import { Artist } from '../models/user';
import { LocalUserService } from './local-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtService: JwtHelperService = new JwtHelperService();

  constructor(
    private http: HttpClient, 
    private artistService: ArtistService, 
    private localUserService: LocalUserService
    ) { }

  authenticate(creds: Credentials) {

    return this.http.post(`${API_CONFIG.BASE_URL}/login`, creds, {
      observe: 'response',
      responseType: 'text'
    })
  }

  successfulLogin(authToken: string) {
    localStorage.setItem('token', authToken);
    const email = this.jwtService.decodeToken(authToken).sub;

    this.artistService.getByEmail(email).subscribe(res => {
      this.localUserService.setLocalArtist(res);
    })
  }

  isAuthenticated() {
    let token = localStorage.getItem('token')
    if(token != null) {
      return !this.jwtService.isTokenExpired(token)
    }
    return false
  }

  logout() {
    localStorage.clear();
  }
}