import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LangService } from './lang.service';
import { environment } from '../../environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomePagesService {
  constructor(private http: HttpClient, private langService: LangService) {}
  getHomePagesInfo(endpoint: string): Observable<any> {
    const headers = new HttpHeaders({
      'Accept-Language': this.langService.getLanguage(),
    });
    return this.http.get(`${environment.getHomePagesUrl}/${endpoint}`, {
      headers,
    });
  }
}
