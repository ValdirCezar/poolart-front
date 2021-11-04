import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "../configurations/api_config";
import { Artist } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class ArtistService {

  BASE_URL = `${API_CONFIG.BASE_URL}/artists`;

  constructor(private http: HttpClient) {}

  create(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(this.BASE_URL, artist);
  }

  getByEmail(email: string): Observable<Artist> {
    const url = `${this.BASE_URL}/email/${email}`;
    return this.http.get<Artist>(url);
  }

}
