import { Component } from '@angular/core';

@Component({
  selector: 'app-successes',
  templateUrl: './successes.component.html',
  styleUrl: './successes.component.scss'
})
export class SuccessesComponent {
  successes = [
    {
      id: 1,
      img: '../../../assets/images/peyvend.svg',
      date: '18.01.2024',
      title: 'Prezident İlham Əliyev Şuşa rayonunda səfərdədir',
      description:
        'Prezident İlham Əliyev iyulun 21-də Şuşa rayonunun Daşaltı kəndinin yenidən qurulması ilə bağlı görüləcək işlərlə tanış olub.',
    },
    {
      id: 2,
      img: '../../../assets/images/polinklinika.svg',
      date: '18.01.2024',
      title: 'Pfizer şirkətinin nümayəndə heyəti ilə görüş keçirilib',
      description:
        'Səhiyyə nazirliyində Pfizer şirkətinin Qafqaz, Mərkəzi Asiya və Monqolustan üzrə rəhbər heyəti ilə görüş keçirilib.',
    },
    {
      id: 3,
      img: '../../../assets/images/laboratoriya.svg',
      date: '18.01.2024',
      title: 'İyunun 17-si Tibb İşçilərinin Peşə Bayramı Günüdür',
      description:
        'Hər il iyunun 17-si ölkəmizdə Tibb İşçilərinin Peşə Bayramı Günü kimi qeyd olunur.',
    },
    {
      id: 4,
      img: '../../../assets/images/laboratoriya.svg',
      date: '18.01.2024',
      title: 'Prezident İlham Əliyev Şuşa rayonunda səfərdədir',
      description:
        'Prezident İlham Əliyev iyulun 21-də Şuşa rayonunun Daşaltı kəndinin yenidən qurulması ilə bağlı görüləcək işlərlə tanış olub.',
    },
    {
      id: 5,
      img: '../../../assets/images/peyvend.svg',
      date: '18.01.2024',
      title: 'Pfizer şirkətinin nümayəndə heyəti ilə görüş keçirilib',
      description:
        'Səhiyyə nazirliyində Pfizer şirkətinin Qafqaz, Mərkəzi Asiya və Monqolustan üzrə rəhbər heyəti ilə görüş keçirilib.',
    },
    {
      id: 6,
      img: '../../../assets/images/polinklinika.svg',
      date: '18.01.2024',
      title: 'İyunun 17-si Tibb İşçilərinin Peşə Bayramı Günüdür',
      description:
        'Hər il iyunun 17-si ölkəmizdə Tibb İşçilərinin Peşə Bayramı Günü kimi qeyd olunur.',
    },
    {
      id: 7,
      img: '../../../assets/images/polinklinika.svg',
      date: '18.01.2024',
      title: 'Pfizer şirkətinin nümayəndə heyəti ilə görüş keçirilib',
      description:
        'Səhiyyə nazirliyində Pfizer şirkətinin Qafqaz, Mərkəzi Asiya və Monqolustan üzrə rəhbər heyəti ilə görüş keçirilib.',
    },
    {
      id: 8,
      img: '../../../assets/images/laboratoriya.svg',
      date: '18.01.2024',
      title: 'İyunun 17-si Tibb İşçilərinin Peşə Bayramı Günüdür',
      description:
        'Hər il iyunun 17-si ölkəmizdə Tibb İşçilərinin Peşə Bayramı Günü kimi qeyd olunur.',
    },
  ];
}
