import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_CONFIG } from "../configurations/api_config";
import { LocalUserService } from "./local-user.service";

@Injectable({
  providedIn: "root",
})
export class FileUploadService {
  
  private baseUrl = API_CONFIG.BASE_URL;

  constructor(
    private http: HttpClient,
    private localUserService: LocalUserService,
    ) {}

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append("file", file);
    const req = new HttpRequest(
      "POST",
      `${this.baseUrl}/users/image/upload`,
      formData,
      {
        responseType: "json",
      }
    ); 
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
 
}
