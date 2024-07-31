import { Component, OnInit } from '@angular/core';
import { FooterService } from '../../core/services/footer.service';
import { LangService } from '../../core/services/lang.service';
import { finalize, forkJoin } from 'rxjs';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  currentYear: number | undefined;
  footerInfo: any={};
  contactInfo: any={};
  constructor(
    private langService: LangService,
    private contactService: ContactService,
    private footerService: FooterService
  ) {}

  ngOnInit() {
    this.loadData();
    this.currentYear = new Date().getFullYear();
  }

  loadData() {
    const endpoint = this.langService.getLanguage() || 'Az';
    this.langService.incrementTotalRequests(2); 

    forkJoin({
      footerInfo: this.footerService.getFooterInfos(endpoint).pipe(
        finalize(() => this.langService.notifyRequestCompleted())
      ),
      contactInfo: this.contactService.getContactInfos(endpoint).pipe(
        finalize(() => this.langService.notifyRequestCompleted())
      ),
    }).subscribe({
      next: ({ footerInfo, contactInfo }) => {
        this.footerInfo = footerInfo;
        this.contactInfo = contactInfo;
      },
      error: (err) => {
        console.error('Error loading data:', err);
        // Handle error accordingly
      },
    });
  }
  get Language() {
    return this.langService.getTranslate();
  }
}
