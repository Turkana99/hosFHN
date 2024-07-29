import { Component } from '@angular/core';
import { HomePagesService } from '../../../../core/services/homepages.service';
import { LangService } from '../../../../core/services/lang.service';
import { DoctorsService } from '../../../../core/services/doctors.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-doctors-carousel',
  templateUrl: './doctors-carousel.component.html',
  styleUrl: './doctors-carousel.component.scss',
})
export class DoctorsCarouselComponent {
  homePageInfos: any = [];
  doctors: any = [];

  constructor(
    private homepagesService: HomePagesService,
    private langService: LangService,
    private doctorsService: DoctorsService
  ) {}

  loadData() {
    const endpoint = this.langService.getLanguage() || 'Az';

    forkJoin({
      homePageInfos: this.homepagesService.getHomePagesInfo(endpoint),
      doctors: this.doctorsService.getDoctorsInfos(endpoint),
    }).subscribe({
      next: ({ homePageInfos, doctors }) => {
        this.homePageInfos = homePageInfos;
        this.doctors = doctors.items;
        console.log('HomePage Infos:', this.homePageInfos);
        console.log('Doctors:', this.doctors);
        this.langService.status.next(3);
      },
      error: (err) => {
        console.error('Error loading data:', err);
        // Handle error accordingly
      },
    });
  }

  ngOnInit() {
    this.langService.status.subscribe((status) => {
      if (status === 2) {
        console.log("3", status);
        this.loadData();
      }
    });
  }
}
