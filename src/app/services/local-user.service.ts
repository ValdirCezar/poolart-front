import { Injectable } from '@angular/core';
import { Artist, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LocalUserService {

  constructor() { }

  setLocalArtist(artist: Artist) {
    localStorage.setItem('user', JSON.stringify(artist));
  }

  getLocalUser(): User {
    return JSON.parse(localStorage.getItem('user'))
  }
}
