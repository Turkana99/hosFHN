import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LangService implements OnInit {
  public status = new BehaviorSubject<number>(0); // Use number instead of Number
  private currentLanguage: string;
  constantNavItem: any = {
    Az: {
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
    En: {
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
    Ru: {
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
    this.currentLanguage = localStorage.getItem('language') || 'Az';
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
  }

  getTranslate() {
    return this.constantNavItem[this.currentLanguage];
  }
}
