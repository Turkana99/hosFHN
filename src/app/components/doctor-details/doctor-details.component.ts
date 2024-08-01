import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrl: './doctor-details.component.scss',
})
export class DoctorDetailsComponent {
  name: string = '';
  fromPage:string="";
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
  constructor(private route: ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.name = params['name'];
    });
    this.route.queryParams.subscribe((params) => {
      this.fromPage = params['from'] || 'doctors'; 
    });
  }
  navigateBack(): void {
    if (this.fromPage === 'main') {
      this.router.navigate(['/main']);
    } else {
      this.router.navigate(['/doctors']);
    }
  }
}
