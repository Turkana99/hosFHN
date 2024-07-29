import { Component } from '@angular/core';
import { TestimonialsService } from '../../../../core/services/testimonials.service';
import { LangService } from '../../../../core/services/lang.service';
import { HomePagesService } from '../../../../core/services/homepages.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-testimonials-carousel',
  templateUrl: './testimonials-carousel.component.html',
  styleUrl: './testimonials-carousel.component.scss',
})
export class TestimonialsCarouselComponent {
  homePageInfos: any = [];
  testimonials: any = [];

  constructor(
    private homepagesService: HomePagesService,
    private langService: LangService,
    private testiService: TestimonialsService
  ) {}

  loadData() {
    const endpoint = this.langService.getLanguage() || 'Az';

    forkJoin({
      homePageInfos: this.homepagesService.getHomePagesInfo(endpoint),
      testimonials: this.testiService.getTestimonialInfos(),
    }).subscribe({
      next: ({ homePageInfos, testimonials }) => {
        this.homePageInfos = homePageInfos;
        this.testimonials = testimonials.items;
        console.log("testimonials",this.testimonials);
        this.langService.status.next(4);
      },
      error: (err) => {
        console.error('Error loading data:', err);
      },
    });
  }

  ngOnInit() {
    this.langService.status.subscribe((status) => {
      if (status === 3) {
        console.log("4", status);
        this.loadData();
      }
    });
  }
}
