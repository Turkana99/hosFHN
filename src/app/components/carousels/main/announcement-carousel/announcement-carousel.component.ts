import { Component } from '@angular/core';

@Component({
  selector: 'app-announcement-carousel',
  templateUrl: './announcement-carousel.component.html',
  styleUrl: './announcement-carousel.component.scss'
})
export class AnnouncementCarouselComponent {
  announcements = [
    {
      id: '1',
      title: 'FHN işə qəbulla əlaqədar növbəti müsabiqə elan edir',
      description:
        'FHN (Fövqəladə Hallar Nazirliyi), müsabiqə elan edir! Əgər siz də öz bacarıqlarınızı FHN-da göstərmək və fərqli növbələrdə işləmək istəyirsinizsə, müsabiqəyə qoşulun.',
      image: '../../../assets/images/elan1.svg',
    },
    {
      id: '2',
      title: 'Məktəblərdə maarifləndirmə davam edir',
      description:
        'Məktəblərdə fövqalədə hallarla bağlı maarifləndirmə tədbirlərimiz davam edir. Tələbələrimizə və tədris heyətinə yönlənmiş tədbirlərimizlə təhlükəsizlik və məlumatlandırma sahəsində fəaliyyətimizi gücləndiririk.',
      image: '../../../assets/images/elan2.svg',
    },
    {
      id: '3',
      title: 'Fövqəladə Hallar Nazirliyinin Dövlət Yanğın Nəzarəti Xidməti tərəfindən regional müşavirələr keçirilmişdir',
      description:
        'Dövlət Yanğın Nəzarəti Xidməti tərəfindən təşkil olunan regional müşavirələr, fövqəladə hallar ərazisində yanğın təhlükəsi ilə başa çıxmağa həsr olunmuşdur.',
      image: '../../../assets/images/elan3.svg',
    },
    {
      id: '4',
      title: 'FHN işə qəbulla əlaqədar növbəti müsabiqə elan edir',
      description:
        'Məktəblərdə fövqalədə hallarla bağlı maarifləndirmə tədbirlərimiz davam edir. Tələbələrimizə və tədris heyətinə yönlənmiş tədbirlərimizlə təhlükəsizlik və məlumatlandırma sahəsində fəaliyyətimizi gücləndiririk.',
      image: '../../../assets/images/elan1.svg',
    },
    {
      id: '5',
      title: 'Məktəblərdə maarifləndirmə davam edir',
      description:
        'Pasiyentlərin stasionarda rahatlığı və effektiv müalicəsi üçün komfortlu standart və VİP palatalar mövcuddur. Xəstələrin yaxınlarının qalması üçün tam şərait yaradılıb.',
      image: '../../../assets/images/elan2.svg',
    },
    {
      id: '6',
      title: 'Fövqəladə Hallar Nazirliyinin Dövlət Yanğın Nəzarəti Xidməti tərəfindən regional müşavirələr keçirilmişdir',
      description:
        'Dövlət Yanğın Nəzarəti Xidməti tərəfindən təşkil olunan regional müşavirələr, fövqəladə hallar ərazisində yanğın təhlükəsi ilə başa çıxmağa həsr olunmuşdur.',
      image: '../../../assets/images/elan3.svg',
    },
  ];


  constructor() {}

  ngOnInit() {}
}
