import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnnouncementDialogComponent } from '../dialogs/announcement-dialog/announcement-dialog.component';
import { HomePagesService } from '../../core/services/homepages.service';
import { finalize, forkJoin } from 'rxjs';
import { LangService } from '../../core/services/lang.service';
import { NewsService } from '../../core/services/news.service';
import { DatePipe } from '@angular/common';
import { UsefulLinkService } from '../../core/services/usefulLinks.service';
import { FeedbackAndSuggestionsPagesService } from '../../core/services/feedbackAndSuggestionsPages.service';
import { ContactService } from '../../core/services/contact.service';

export interface NewsItem {
  id: number;
  title: string;
  content: string;
  coverImageUrl: string;
  createdDate: string;
  createdDateFormatted?: string; // Optional formatted date
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [DatePipe],
})
export class MainComponent implements AfterViewInit, OnInit {
  showSpinner = false;
  homePageInfos: any = [];
  news: NewsItem[] = [];
  usefulLinks: any = [];
  contact: any = {}; 

  constructor(
    public dialog: MatDialog,
    private langService: LangService,
    private newsService: NewsService,
    private useLinkService: UsefulLinkService,
    private contactService: ContactService,
    private datePipe: DatePipe,
    private homepagesService: HomePagesService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit() {
    const hasShownAnnouncement = sessionStorage.getItem('hasShownAnnouncement');
    if (!hasShownAnnouncement) {
      setTimeout(() => {
        this.dialog.open(AnnouncementDialogComponent, {
          width: '628px',
          height: '380px',
          position: {
            top: `10%`,
          },
        });
        sessionStorage.setItem('hasShownAnnouncement', 'true');
      }, 1000);
    }
  }

  loadData() {
    const endpoint = this.langService.getLanguage() || 'Az';
    this.langService.incrementTotalRequests(4);
    forkJoin({
      homePageInfos: this.homepagesService
        .getHomePagesInfo(endpoint)
        .pipe(finalize(() => this.langService.notifyRequestCompleted())),
      news: this.newsService
        .getNewsInfos(endpoint)
        .pipe(finalize(() => this.langService.notifyRequestCompleted())),
      usefulLinks: this.useLinkService
        .getUsefulLinkInfos(endpoint)
        .pipe(finalize(() => this.langService.notifyRequestCompleted())),
      contact: this.contactService
        .getContactInfos(endpoint)
        .pipe(finalize(() => this.langService.notifyRequestCompleted())),
    }).subscribe({
      next: ({ homePageInfos, news, usefulLinks, contact }) => {
        this.homePageInfos = homePageInfos;
        this.usefulLinks = usefulLinks;
        this.contact = contact;
        this.news = news.map((item: NewsItem) => ({
          ...item,
          createdDateFormatted: this.formatDate(item.createdDate),
        }));
      },
      error: (err) => {
        console.error('Error loading data:', err);
      },
    });
  }

  // Format date method
  formatDate(dateString: string): string {
    if (dateString === '0001-01-01T00:00:00') {
      return 'N/A';
    }

    const date = new Date(dateString);
    return this.datePipe.transform(date, 'dd.MM.yyyy') || 'N/A';
  }
}
