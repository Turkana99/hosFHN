import { Injectable } from '@angular/core';
import { LangService } from './lang.service';
import { environment } from '../../environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  constructor(private http: HttpClient, private langService: LangService) {}
  getDoctorsInfos(endpoint: string): Observable<any> {
    const headers = new HttpHeaders({
      'Accept-Language': this.langService.getLanguage(),
    });
    return this.http.get(`${environment.getDoctorsUrl}/${endpoint}`, { headers });
  }
}
