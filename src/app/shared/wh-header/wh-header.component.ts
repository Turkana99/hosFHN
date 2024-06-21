import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-wh-header',
  templateUrl: './wh-header.component.html',
  styleUrl: './wh-header.component.scss'
})
export class WhHeaderComponent {
  whiteLogo = false;
  searchVisible: boolean = false;
  searchQuery: string = '';

  toggleSearch() {
    this.searchVisible = !this.searchVisible;
    if (!this.searchVisible) {
      this.searchQuery = ''; // Clear search query when hiding the input
    }
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

}
