import { Component } from '@angular/core';

@Component({
  selector: 'app-news-detail-carousel',
  templateUrl: './news-detail-carousel.component.html',
  styleUrl: './news-detail-carousel.component.scss'
})
export class NewsDetailCarouselComponent {
  news = [
    {
      id: '1',
      image: '../../../assets/images/news1.svg',
    },
    {
      id: '2',
      image: '../../../assets/images/news2.svg',
    },
    {
      id: '3',
      image: '../../../assets/images/news3.svg',
    },
  ];
}
