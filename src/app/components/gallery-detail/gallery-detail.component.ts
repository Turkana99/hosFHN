import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrl: './gallery-detail.component.scss'
})
export class GalleryDetailComponent {
  title: string = '';

  photos = [
    {
      id: 1,
      img: '../../../assets/images/photo1.svg',
      title: 'FHN hospital binası',
    },
    {
      id: 2,
      img: '../../../assets/images/photo2.svg',
      title: 'Təlim prosesi',
    },
    {
      id: 3,
      img: '../../../assets/images/photo3.svg',
      title: 'Açılış mərasimi',
    },
    {
      id: 4,
      img: '../../../assets/images/photo4.svg',
      title: 'Hospitalın yuxardan çəkilişi',
    },
    {
      id: 5,
      img: '../../../assets/images/photo5.svg',
      title: 'Hospital binası',
    },

  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.title = params['title'];
    });
  }
}
