import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, ResolveFn, Router } from '@angular/router';
import { LangService } from '../services/lang.service';

export const languageResolver: ResolveFn<string> = (route, state) => {
  const router = inject(Router);
  let language = route.paramMap.get('lang') as string;

  if (!['en', 'az', 'ru'].includes(language)) {
    language = 'az';
    router.navigate([`/${language}`]);
  }
  console.log('lang', language);
  inject(LangService).setLanguage(language as string);
  return language;
};
