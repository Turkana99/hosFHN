import { Component } from '@angular/core';

@Component({
  selector: 'app-announcement-detail-carousel',
  templateUrl: './announcement-detail-carousel.component.html',
  styleUrl: './announcement-detail-carousel.component.scss'
})
export class AnnouncementDetailCarouselComponent {
  announcements = [
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
