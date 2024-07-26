import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent {
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
    {
      id: 3,
      video: '../../../assets/images/videos/tibb_xidmeti.mp4',
      title: 'Tibb xidməti',
    },
  ];
}
