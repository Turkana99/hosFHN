import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { HomePagesService } from '../../../../core/services/homepages.service';
import { LangService } from '../../../../core/services/lang.service';
import { DoctorsService } from '../../../../core/services/doctors.service';

@Component({
  selector: 'app-doctors-carousel',
  templateUrl: './doctors-carousel.component.html',
  styleUrls: ['./doctors-carousel.component.scss'],
})
export class DoctorsCarouselComponent implements OnInit {
  homePageInfos: any = [];
  doctors: any = [];

  constructor(
    private homepagesService: HomePagesService,
    private langService: LangService,
    private doctorsService: DoctorsService
  ) {}

  ngOnInit() {
    this.loadData();
  }
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
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
      doctors: this.doctorsService
        .getDoctorsInfos(endpoint)
        .pipe(finalize(() => this.langService.notifyRequestCompleted())),
    }).subscribe({
      next: ({ homePageInfos, doctors }) => {
        this.homePageInfos = homePageInfos;
        this.doctors = doctors.items;
        console.log('HomePage Infos:', this.homePageInfos);
        console.log('Doctors:', this.doctors);
      },
      error: (err) => {
        console.error('Error loading data:', err);
      },
    });
  }
}
