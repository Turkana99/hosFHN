import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnnouncementDialogComponent } from '../dialogs/announcement-dialog/announcement-dialog.component';
import { HomePagesService } from '../../core/services/homepages.service';
import { finalize, forkJoin } from 'rxjs';
import { LangService } from '../../core/services/lang.service';
import { NewsService } from '../../core/services/news.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements AfterViewInit, OnInit {
  showSpinner = false;
  homePageInfos: any = [];
  news: any = [];
  constructor(
    public dialog: MatDialog,
    private langService: LangService,
    private newsService: NewsService,
    private homepagesService: HomePagesService
  ) {}

  ngOnInit(): void {
    this.langService.status.subscribe((status) => {
      if (status === 0) {
        console.log("1", status);
        this.loadData();
      }
    });
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
    forkJoin({
      homePageInfos: this.homepagesService.getHomePagesInfo(endpoint),
      news: this.newsService.getNewsInfos(endpoint),
    }).subscribe({
      next: ({ homePageInfos, news }) => {
        this.homePageInfos = homePageInfos;
        this.news = news.items;
      },
      error: (err) => {
        console.error('Error loading data:', err);
      },
    });
    this.langService.status.next(3);
  }
}
