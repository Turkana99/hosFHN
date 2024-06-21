import { Component } from '@angular/core';

@Component({
  selector: 'app-sections-carousel',
  templateUrl: './sections-carousel.component.html',
  styleUrl: './sections-carousel.component.scss',
})
export class SectionsCarouselComponent {
  sections = [
    {
      id: '1',
      title: 'Poliklinika',
      description:
        'Hospitalda işləyən peşəkar həkimlərin - terapevt, pediatr, ginekoloq, cərrah, oftalmoloq, kardioloq, nefroloq, travmatoloq, LOR, stomatoloq və digərlərinin ambulator qəbuluna yazıla bilərsiniz.',
      image: '../../../assets/images/polinklinika.svg',
    },
    {
      id: '2',
      title: 'Diaqnostika',
      description:
        'Hospitalda ən müasir tibbi diaqnostik avadanlıqlarla bütün növ radioloji (rentgen, USM, rəngli doppler, mammoqrafiya, KT, MRT) və diaqnostik (angioqrafiya, biopsiya) müayinələr həyata keçirilir.',
      image: '../../../assets/images/diaqnostika.svg',
    },
    {
      id: '3',
      title: 'Laboratoriya',
      description:
        'Ümumi klinik, biokimyəvi, immunoferment, molekulyar (PZR) diaqnostik laborator analizlər beynəlxalq standartlara uyğun müasir analizatorlarda yüksəkixtisaslı həkim laborantlar tərəfindən aparılır.',
      image: '../../../assets/images/laboratoriya.svg',
    },
    {
      id: '4',
      title: 'Təcili yardım',
      description:
        'Əhaliyə təcili, təxirəsalınmaz və diaqnostik-müalicəvi xidmət göstərilir. AMBULANCE maşınları pasiyentlərə keyfiyyətli tibbi yardımın göstərilməsi üçün lazımi tibbi avadanlıqlarla tam təchiz olunub.',
      image: '../../../assets/images/teciliyardim.svg',
    },
    {
      id: '5',
      title: 'Stasionar',
      description:
        'Pasiyentlərin stasionarda rahatlığı və effektiv müalicəsi üçün komfortlu standart və VİP palatalar mövcuddur. Xəstələrin yaxınlarının qalması üçün tam şərait yaradılıb.',
      image: '../../../assets/images/stansionar.svg',
    },
    {
      id: '6',
      title: 'Peyvəndlər',
      description:
        'Mərkəzi Gömrük Hospitalı Avropa və Amerikanın etibarlı istehsalçılardan alınmış yüksəkkeyfiyyətli peyvəndləri Sizə təqdim edir. Peyvəndlərinizi vaxtında etdirin!',
      image: '../../../assets/images/peyvend.svg',
    },
  ];


  constructor() {}

  ngOnInit() {}
}
