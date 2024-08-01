import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LangService implements OnInit {
  private currentLanguage: string;
  private requestsCompleted = new BehaviorSubject<number>(0);
  private totalRequests = new BehaviorSubject<number>(0);
  constantNavItem: any = {
    az: {
      homePage: 'Ana Səhifə',
      about: 'Haqqımızda',
      departments: 'Şöbələr',
      doctors: 'Həkimlər',
      news: 'Xəbərlər',
      advertisements: 'Elanlar',
      achievements: 'Uğurlarımız',
      acknowledgements: 'Maarifləndirmə',
      newsDrop: 'Xəbər',
      gallery: 'Qalereya',
      photo: 'Foto',
      video: 'Video',
      onlineLaboratory: 'Onlayn Laboratoriya',
      contact: 'Əlaqə',
    },
    en: {
      homePage: 'Home Page',
      about: 'About',
      departments: 'Departments',
      doctors: 'Doctors',
      news: 'News',
      advertisements: 'Advertisements',
      achievements: 'Achievements',
      acknowledgements: 'Acknowledgements',
      newsDrop: 'News',
      gallery: 'Gallery',
      photo: 'Photo',
      video: 'Video',
      onlineLaboratory: 'Online Laboratory',
      contact: 'Contact',
    },
    ru: {
      homePage: 'Домашняя страница',
      about: 'О нас',
      departments: 'Oтделы',
      doctors: 'Bрачи',
      news: 'Новости',
      advertisements: 'Oбъявление',
      achievements: 'Наша удача',
      acknowledgements: 'Образование',
      newsDrop: 'Новости',
      gallery: 'Галерея',
      photo: 'Фото',
      video: 'Bидео',
      onlineLaboratory: 'Oнлайн Лаборатория',
      contact: 'Контакт',
    },
  };

  constructor() {
    this.currentLanguage = localStorage.getItem('language') || 'az';
  }

  ngOnInit(): void {
    this.getTranslate();
  }

  getLanguage(): any {
    return this.currentLanguage;
  }

  setLanguage(language: string): void {
    this.currentLanguage = language;
    localStorage.setItem('language', language);
    this.resetRequestTracking();
  }

  getTranslate() {
    return this.constantNavItem[this.currentLanguage];
  }

  notifyRequestCompleted() {
    this.requestsCompleted.next(this.requestsCompleted.value + 1);
  }

  incrementTotalRequests(count: number) {
    this.totalRequests.next(this.totalRequests.value + count);
  }

  allRequestsCompleted(): Observable<boolean> {
    return this.requestsCompleted.pipe(
      map((completed) => completed >= this.totalRequests.value),
      tap((allCompleted) => {
        if (allCompleted) {
          this.reloadPage();
        }
      })
    );
  }

  private resetRequestTracking() {
    this.requestsCompleted.next(0);
    this.totalRequests.next(0);
  }

  private reloadPage() {
    window.location.reload();
  }
}
