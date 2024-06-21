import { Component } from '@angular/core';

@Component({
  selector: 'app-section-detail-carousel',
  templateUrl: './section-detail-carousel.component.html',
  styleUrl: './section-detail-carousel.component.scss'
})
export class SectionDetailCarouselComponent {
  sections = [
    {
      id: '1',
      image: '../../../assets/images/about1.svg',
    },
    {
      id: '2',
      image: '../../../assets/images/about2.svg',
    },
    {
      id: '3',
      image: '../../../assets/images/about3.svg',
    },
    {
      id: '4',
      image: '../../../assets/images/about4.svg',
    },
    {
      id: '5',
      image: '../../../assets/images/about1.svg',
    },
    {
      id: '6',
      image: '../../../assets/images/about2.svg',
    }
  ];
}
