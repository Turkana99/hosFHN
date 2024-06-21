import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials-carousel',
  templateUrl: './testimonials-carousel.component.html',
  styleUrl: './testimonials-carousel.component.scss'
})
export class TestimonialsCarouselComponent {
  testimonials = [
    {
      id: '1',
      author: 'JOHN DOE',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad voluptas cum pariatur omnis deleniti fugiat cumque! Cum harum quo mollitia eligendi molestias distinctio, dolorum dolor? Accusamus sit at tempora.',
    },
    {
      id: '2',
      author: 'AMIR QALAYEV',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad voluptas cum pariatur omnis deleniti fugiat cumque! Cum harum quo mollitia eligendi molestias distinctio, dolorum dolor? Accusamus sit at tempora.',
    },
    {
      id: '3',
      author: 'TABRIZ GULMAMMADOV',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad voluptas cum pariatur omnis deleniti fugiat cumque! Cum harum quo mollitia eligendi molestias distinctio, dolorum dolor? Accusamus sit at tempora.',
    },
    {
      id: '4',
      author: 'TEST',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad voluptas cum pariatur omnis deleniti fugiat cumque! Cum harum quo mollitia eligendi molestias distinctio, dolorum dolor? Accusamus sit at tempora.',
    },
    {
      id: '5',
      author: 'TABRIZ GULMAMMADOV',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad voluptas cum pariatur omnis deleniti fugiat cumque! Cum harum quo mollitia eligendi molestias distinctio, dolorum dolor? Accusamus sit at tempora.',
    },
    {
      id: '6',
      author: 'AMIR QALAYEV',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad voluptas cum pariatur omnis deleniti fugiat cumque! Cum harum quo mollitia eligendi molestias distinctio, dolorum dolor? Accusamus sit at tempora.',
    },
  ];


}
