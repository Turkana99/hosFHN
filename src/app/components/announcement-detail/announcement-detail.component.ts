import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-announcement-detail',
  templateUrl: './announcement-detail.component.html',
  styleUrl: './announcement-detail.component.scss',
})
export class AnnouncementDetailComponent {
  title: string = '';
  announcements = [
    {
      id: 1,
      img: '../../../assets/images/news1.svg',
      date: '18.01.2024',
      title: 'Prezident İlham Əliyev Şuşa rayonunda səfərdədir',
      description:
        'Prezident İlham Əliyev iyulun 21-də Şuşa rayonunun Daşaltı kəndinin yenidən qurulması ilə bağlı görüləcək işlərlə tanış olub.',
    },
    {
      id: 2,
      img: '../../../assets/images/news2.svg',
      date: '18.01.2024',
      title: 'Pfizer şirkətinin nümayəndə heyəti ilə görüş keçirilib',
      description:
        'Səhiyyə nazirliyində Pfizer şirkətinin Qafqaz, Mərkəzi Asiya və Monqolustan üzrə rəhbər heyəti ilə görüş keçirilib.',
    },
    {
      id: 3,
      img: '../../../assets/images/news3.svg',
      date: '18.01.2024',
      title: 'İyunun 17-si Tibb İşçilərinin Peşə Bayramı Günüdür',
      description:
        'Hər il iyunun 17-si ölkəmizdə Tibb İşçilərinin Peşə Bayramı Günü kimi qeyd olunur.',
    },
    {
      id: 4,
      img: '../../../assets/images/news1.svg',
      date: '18.01.2024',
      title: 'Prezident İlham Əliyev Şuşa rayonunda səfərdədir',
      description:
        'Prezident İlham Əliyev iyulun 21-də Şuşa rayonunun Daşaltı kəndinin yenidən qurulması ilə bağlı görüləcək işlərlə tanış olub.',
    },
    {
      id: 5,
      img: '../../../assets/images/news2.svg',
      date: '18.01.2024',
      title: 'Pfizer şirkətinin nümayəndə heyəti ilə görüş keçirilib',
      description:
        'Səhiyyə nazirliyində Pfizer şirkətinin Qafqaz, Mərkəzi Asiya və Monqolustan üzrə rəhbər heyəti ilə görüş keçirilib.',
    },
    {
      id: 6,
      img: '../../../assets/images/news3.svg',
      date: '18.01.2024',
      title: 'İyunun 17-si Tibb İşçilərinin Peşə Bayramı Günüdür',
      description:
        'Hər il iyunun 17-si ölkəmizdə Tibb İşçilərinin Peşə Bayramı Günü kimi qeyd olunur.',
    },
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.title = params['title'];
    });
  }
}
