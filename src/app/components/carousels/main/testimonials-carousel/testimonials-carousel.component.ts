import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LangService } from '../../../../core/services/lang.service';
import { HomePagesService } from '../../../../core/services/homepages.service';
import { TestimonialsService } from '../../../../core/services/testimonials.service';

@Component({
  selector: 'app-testimonials-carousel',
  templateUrl: './testimonials-carousel.component.html',
  styleUrls: ['./testimonials-carousel.component.scss'],
})
export class TestimonialsCarouselComponent implements OnInit {
  homePageInfos: any = [];
  testimonials: any = [];

  constructor(
    private homepagesService: HomePagesService,
    private langService: LangService,
    private testiService: TestimonialsService
  ) {}

  ngOnInit() {
    this.loadData();
  }
  responsiveOptions: any[] = [
    {
      breakpoint: '1150px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '830px',
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
      testimonials: this.testiService
        .getTestimonialInfos()
        .pipe(finalize(() => this.langService.notifyRequestCompleted())),
    }).subscribe({
      next: ({ homePageInfos, testimonials }) => {
        this.homePageInfos = homePageInfos;
        this.testimonials = testimonials.items;
        console.log('Testimonials:', this.testimonials);
      },
      error: (err) => {
        console.error('Error loading data:', err);
        // Handle error accordingly
      },
    });
  }
}
