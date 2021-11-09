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

  findById(id: string): Observable<Artist> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.get<Artist>(url);
  }

  update(artist: Artist): Observable<Artist> {
    const url = `${this.BASE_URL}/${artist.id}`;
    return this.http.put<Artist>(url, artist);
  }

}
