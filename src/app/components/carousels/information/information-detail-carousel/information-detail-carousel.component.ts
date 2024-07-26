import { Component } from '@angular/core';

@Component({
  selector: 'app-information-detail-carousel',
  templateUrl: './information-detail-carousel.component.html',
  styleUrl: './information-detail-carousel.component.scss'
})
export class InformationDetailCarouselComponent {
  information = [
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
