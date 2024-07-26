import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-detail-carousel',
  templateUrl: './doctor-detail-carousel.component.html',
  styleUrl: './doctor-detail-carousel.component.scss',
})
export class DoctorDetailCarouselComponent {
  certificates = [
    {
      id: '1',
      image: '../../../assets/images/cert1.svg',
    },
    {
      id: '2',
      image: '../../../assets/images/cert2.svg',
    },
    {
      id: '3',
      image: '../../../assets/images/cert1.svg',
    },
    {
      id: '4',
      image: '../../../assets/images/cert2.svg',
    },
  ];

  constructor() {}
}
