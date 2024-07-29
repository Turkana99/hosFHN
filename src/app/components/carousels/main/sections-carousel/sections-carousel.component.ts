import { Component } from '@angular/core';
import { HomePagesService } from '../../../../core/services/homepages.service';
import { forkJoin } from 'rxjs';
import { DepartmentsService } from '../../../../core/services/departments.service';
import { LangService } from '../../../../core/services/lang.service';

@Component({
  selector: 'app-sections-carousel',
  templateUrl: './sections-carousel.component.html',
  styleUrl: './sections-carousel.component.scss',
})
export class SectionsCarouselComponent {
  homePageInfos: any = [];
  departments: any = [];

  constructor(
    private homepagesService: HomePagesService,
    private langService: LangService,
    private departmentsService: DepartmentsService
  ) {}

  loadData() {
    const endpoint = this.langService.getLanguage() || 'Az';

    forkJoin({
      homePageInfos: this.homepagesService.getHomePagesInfo(endpoint),
      departments: this.departmentsService.getDepartmentInfos(endpoint),
    }).subscribe({
      next: ({ homePageInfos, departments }) => {
        this.homePageInfos = homePageInfos;
        this.departments = departments.items;
        console.log('HomePage Infos:', this.homePageInfos);
        console.log('Departments:', this.departments);
        this.langService.status.next(2);
      },
      error: (err) => {
        console.error('Error loading data:', err);
        // Handle error accordingly
      },
    });
  }

  ngOnInit() {
    this.langService.status.subscribe((status) => {
      if (status === 1) {
        console.log("2", status);
        this.loadData();
      }
    });
  }
}
