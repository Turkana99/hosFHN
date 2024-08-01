import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, ResolveFn, Router } from '@angular/router';
import { LangService } from '../services/lang.service';

export const languageResolver: ResolveFn<any> = (route, state) => {
  const language = route.paramMap.get('lang');
  return inject(LangService).setLanguage(language as string);
};
