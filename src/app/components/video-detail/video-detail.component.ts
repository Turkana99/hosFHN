import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrl: './video-detail.component.scss'
})
export class VideoDetailComponent {
  title: string = '';

  video = [
    {
      id: 1,
      video: '../../../assets/images/videos/hospital_acilisi.mp4',
      title: 'Açılış mərasimi',
    },
    {
      id: 2,
      video: '../../../assets/images/videos/sehra_hospitali.mp4',
      title: 'Səhra hospitalı',
    },
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.title = params['title'];
    });
  }
}
