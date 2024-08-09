import { Component, HostListener, OnInit } from '@angular/core';
import { LangService } from '../../core/services/lang.service';
import { isNgTemplate } from '@angular/compiler';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  whiteLogo = false;
  searchVisible: boolean = false;
  searchQuery: string = '';

  constructor(
    public langService: LangService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {}
  ngOnInit(): void {}
  toggleSearch() {
    this.searchVisible = !this.searchVisible;
    if (!this.searchVisible) {
      this.searchQuery = ''; // Clear search query when hiding the input
    }
  }

  changeLanguage(language: string): void {
    this.router.navigate([`/${language}`]);
    // this.langService.setLanguage(language);
    // console.log('activatedRoute', this.activatedRoute);
    // window.location.reload();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = document.querySelector('.header') as HTMLElement;
    if (window.pageYOffset > 100) {
      element.classList.add('navbar-inverse');
      this.whiteLogo = true;
    } else {
      element.classList.remove('navbar-inverse');
      this.whiteLogo = false;
    }
  }

  get Language() {
    return this.langService.getTranslate();
  }
}
