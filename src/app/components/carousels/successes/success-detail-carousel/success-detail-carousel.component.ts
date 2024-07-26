import { Component } from '@angular/core';

@Component({
  selector: 'app-success-detail-carousel',
  templateUrl: './success-detail-carousel.component.html',
  styleUrl: './success-detail-carousel.component.scss'
})
export class SuccessDetailCarouselComponent {
  success = [
    {
      id: '1',
      image: '../../../assets/images/peyvend.svg',
    },
    {
      id: '2',
      image: '../../../assets/images/laboratoriya.svg',
    },
    {
      id: '3',
      image: '../../../assets/images/polinklinika.svg',
    },
  ];
}
