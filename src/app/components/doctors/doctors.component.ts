import { Component } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.scss',
})
export class DoctorsComponent {
  doctors = [
    {
      id: 1,
      img: '../../../assets/images/doc3.svg',
      position: 'Kardioloq',
      name: 'Aygün Mirzəliyeva',
    },
    {
      id: 2,
      img: '../../../assets/images/doc2.svg',
      position: 'Travmotoloq',
      name: 'Fərid Mustafayev',
    },
    {
      id: 3,
      img: '../../../assets/images/doc1.svg',
      position: 'Endokrinoloq',
      name: 'Azər Kərimov',
    },
    {
      id: 4,
      img: '../../../assets/images/doc2.svg',
      position: 'Travmotoloq',
      name: 'Fərid Mustafayev',
    },
    {
      id: 5,
      img: '../../../assets/images/doc3.svg',
      position: 'Kardioloq',
      name: 'Aygün Mirzəliyeva',
    },
    {
      id: 6,
      img: '../../../assets/images/doc1.svg',
      position: 'Endokrinoloq',
      name: 'Azər Kərimov',
    },
    {
      id: 7,
      img: '../../../assets/images/doc3.svg',
      position: 'Kardioloq',
      name: 'Aygün Mirzəliyeva',
    },
    {
      id: 8,
      img: '../../../assets/images/doc2.svg',
      position: 'Endokrinoloq',
      name: 'Azər Kərimov',
    },
  ];
  constructor() {}
}
