import { Injectable } from '@angular/core';
import { LangService } from './lang.service';
import { environment } from '../../environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TestimonialsService {
  constructor(private http: HttpClient, private langService: LangService) {}
  getTestimonialInfos(): Observable<any> {
    return this.http.get(environment.getTestimonialsUrl);
  }
}
