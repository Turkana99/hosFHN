import { Component, HostListener } from '@angular/core';
import { LangService } from '../../core/services/lang.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wh-header',
  templateUrl: './wh-header.component.html',
  styleUrl: './wh-header.component.scss',
})
export class WhHeaderComponent {
  whiteLogo = false;
  searchVisible: boolean = false;
  searchQuery: string = '';
  selectedItem: string = '';
  toggleSearch() {
    this.searchVisible = !this.searchVisible;
    if (!this.searchVisible) {
      this.searchQuery = ''; // Clear search query when hiding the input
    }
  }
  constructor(public langService: LangService, public router: Router) {}
  changeLanguage(language: string): void {
    this.router.navigate([`/${language}`]);
    // this.langService.setLanguage(language);
    // console.log('activatedRoute', this.activatedRoute);
    // window.location.reload();
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = document.querySelector('.wh-header') as HTMLElement;
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
  setSelectedItem(item: string): void {
    this.selectedItem = item;
  }
}
