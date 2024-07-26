import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
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
    {
      id: 6,
      img: '../../../assets/images/photo6.svg',
      title: 'Hospital binası',
    },
    {
      id: 7,
      img: '../../../assets/images/photo7.svg',
      title: 'Hospital koridor',
    },
    {
      id: 8,
      img: '../../../assets/images/photo8.svg',
      title: 'Açılış mərasimiş',
    },
    {
      id: 9,
      img: '../../../assets/images/photo9.svg',
      title: 'Hospitala baxış',
    },
  ];
}
