import { Injectable } from '@angular/core';
import { Artist } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LocalUserService {

  constructor() { }

  setLocalArtist(artist: Artist) {
    localStorage.setItem('artist', JSON.stringify(artist));
  }
}
