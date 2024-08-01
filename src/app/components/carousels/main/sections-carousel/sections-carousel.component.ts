import { Component, OnInit } from '@angular/core';
import { finalize, forkJoin } from 'rxjs';
import { HomePagesService } from '../../../../core/services/homepages.service';
import { DepartmentsService } from '../../../../core/services/departments.service';
import { LangService } from '../../../../core/services/lang.service';

@Component({
  selector: 'app-sections-carousel',
  templateUrl: './sections-carousel.component.html',
  styleUrls: ['./sections-carousel.component.scss'],
})
export class SectionsCarouselComponent implements OnInit {
  homePageInfos: any = [];
  departments: any = [];

  constructor(
    private homepagesService: HomePagesService,
    private langService: LangService,
    private departmentsService: DepartmentsService
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
      breakpoint: '900px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '650px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  loadData() {
    const endpoint = this.langService.getLanguage() || 'Az';

    // Increment total requests count for each API call
    this.langService.incrementTotalRequests(2);

    forkJoin({
      homePageInfos: this.homepagesService
        .getHomePagesInfo(endpoint)
        .pipe(finalize(() => this.langService.notifyRequestCompleted())),
      departments: this.departmentsService
        .getDepartmentInfos(endpoint)
        .pipe(finalize(() => this.langService.notifyRequestCompleted())),
    }).subscribe({
      next: ({ homePageInfos, departments }) => {
        this.homePageInfos = homePageInfos;
        this.departments = departments.items;
        console.log('HomePage Infos:', this.homePageInfos);
        console.log('Departments:', this.departments);
      },
      error: (err) => {
        console.error('Error loading data:', err);
        // Handle error accordingly
      },
    });
  }
}
