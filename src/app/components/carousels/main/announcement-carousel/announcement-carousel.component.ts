import { Component } from '@angular/core';
import { LangService } from '../../../../core/services/lang.service';
import { HomePagesService } from '../../../../core/services/homepages.service';
import { AdvertisementsService } from '../../../../core/services/advertisements.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-announcement-carousel',
  templateUrl: './announcement-carousel.component.html',
  styleUrl: './announcement-carousel.component.scss'
})
export class AnnouncementCarouselComponent {
  homePageInfos: any = [];
  advertisements: any = [];

  constructor(
    private homepagesService: HomePagesService,
    private langService: LangService,
    private advService: AdvertisementsService
  ) {}

  loadData() {
    const endpoint = this.langService.getLanguage() || 'Az';

    forkJoin({
      homePageInfos: this.homepagesService.getHomePagesInfo(endpoint),
      advertisements: this.advService.getAdvertisementInfos(endpoint),
    }).subscribe({
      next: ({ homePageInfos, advertisements }) => {
        this.homePageInfos = homePageInfos;
        this.advertisements = advertisements.items;
        console.log('HomePage Infos:', this.homePageInfos);
        console.log('Doctors:', this.advertisements);
        this.langService.status.next(5);
      },
      error: (err) => {
        console.error('Error loading data:', err);
        // Handle error accordingly
      },
    });
  }

  ngOnInit() {
    this.langService.status.subscribe((status) => {
      if (status === 4) {
        console.log("5", status);
        this.loadData();
      }
    });
  }
}
