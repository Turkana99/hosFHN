import { Component } from '@angular/core';

@Component({
  selector: 'app-doctors-carousel',
  templateUrl: './doctors-carousel.component.html',
  styleUrl: './doctors-carousel.component.scss',
})
export class DoctorsCarouselComponent {
  doctors = [
    {
      id: '1',
      title: 'Dr. Azər Kərimov',
      description: 'Reanimasiya',
      image: '../../../assets/images/doc1.svg',
    },
    {
      id: '2',
      title: 'Dr. Sərdar Kazımlı',
      description: 'Radiologiya',
      image: '../../../assets/images/doc2.svg',
    },
    {
      id: '3',
      title: 'Dr. Fəridə Mustafayeva',
      description: 'Stomatologiya',
      image: '../../../assets/images/doc3.svg',
    },
    {
      id: '4',
      title: 'Dr. Azər Kərimov',
      description: 'Reanimasiya',
      image: '../../../assets/images/doc1.svg',
    },
    {
      id: '5',
      title: 'Dr. Sərdar Kazımlı',
      description: 'Radiologiya',
      image: '../../../assets/images/doc2.svg',
    },
    {
      id: '6',
      title: 'Dr. Fəridə Mustafayeva',
      description: 'Stomatologiya',
      image: '../../../assets/images/doc3.svg',
    },
  ];
}
