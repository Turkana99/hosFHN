import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LangService } from '../../../../core/services/lang.service';
import { HomePagesService } from '../../../../core/services/homepages.service';
import { AdvertisementsService } from '../../../../core/services/advertisements.service';

@Component({
  selector: 'app-announcement-carousel',
  templateUrl: './announcement-carousel.component.html',
  styleUrls: ['./announcement-carousel.component.scss'],
})
export class AnnouncementCarouselComponent implements OnInit {
  homePageInfos: any = [];
  advertisements: any = [];

  constructor(
    private homepagesService: HomePagesService,
    private langService: LangService,
    private advService: AdvertisementsService
  ) {}

  ngOnInit() {
    this.loadData();
  }
  responsiveOptions: any[] = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '1350px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '900px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  loadData() {
    const endpoint = this.langService.getLanguage() || 'Az';
    this.langService.incrementTotalRequests(2);

    forkJoin({
      homePageInfos: this.homepagesService
        .getHomePagesInfo(endpoint)
        .pipe(finalize(() => this.langService.notifyRequestCompleted())),
      advertisements: this.advService
        .getAdvertisementInfos(endpoint)
        .pipe(finalize(() => this.langService.notifyRequestCompleted())),
    }).subscribe({
      next: ({ homePageInfos, advertisements }) => {
        this.homePageInfos = homePageInfos;
        this.advertisements = advertisements;
        console.log('HomePage Infos:', this.homePageInfos);
        console.log('Advertisements:', this.advertisements);
      },
      error: (err) => {
        console.error('Error loading data:', err);
      },
    });
  }
}
