import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-section-detail',
  templateUrl: './section-detail.component.html',
  styleUrl: './section-detail.component.scss',
})
export class SectionDetailComponent {
  title: string = '';

  doctors = [
    {
      id: 1,
      img: '../../../assets/images/doc3.svg',
      name: 'Kardioloq',
      position: 'Aygün Mirzəliyeva',
    },
    {
      id: 2,
      img: '../../../assets/images/doc2.svg',
      name: 'Travmotoloq',
      position: 'Fərid Mustafayev',
    },
    {
      id: 3,
      img: '../../../assets/images/doc1.svg',
      name: 'Endokrinoloq',
      position: 'Azər Kərimov',
    },
    {
      id: 5,
      img: '../../../assets/images/doc2.svg',
      name: 'Travmotoloq',
      position: 'Fərid Mustafayev',
    },
    {
      id: 4,
      img: '../../../assets/images/doc3.svg',
      name: 'Kardioloq',
      position: 'Aygün Mirzəliyeva',
    },
    {
      id: 6,
      img: '../../../assets/images/doc1.svg',
      name: 'Endokrinoloq',
      position: 'Azər Kərimov',
    },
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.title = params['title'];
    });
  }
}
