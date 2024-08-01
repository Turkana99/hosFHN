import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.scss',
})
export class NewsDetailComponent implements OnInit {
  title: string = '';
  fromPage: string = '';
  news = [
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
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.title = params['title'];
    });
    this.route.queryParams.subscribe((params) => {
      this.fromPage = params['from'] || 'news';
    });
  }
  navigateBack(): void {
    if (this.fromPage === 'main') {
      this.router.navigate(['/main']);
    } else {
      this.router.navigate(['/news']);
    }
  }
}
