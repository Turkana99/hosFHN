import { Component } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.scss',
})
export class SectionsComponent {
  sections = [
    {
      id: 1,
      img: '../../../assets/images/section1.svg',
      title: 'Poliklinika',
      description:
        'Hospitalda işləyən peşəkar həkimlərin - terapevt, pediatr, ginekoloq, cərrah, oftalmoloq, kardioloq, nefroloq, travmatoloq, LOR, stomatoloq və digərlərinin ambulator qəbuluna yazıla bilərsiniz.',
    },
    {
      id: 2,
      img: '../../../assets/images/section2.svg',
      title: 'Diaqnostika',
      description:
        'Hospitalda ən müasir tibbi diaqnostik avadanlıqlarla bütün növ radioloji (rentgen, USM, rəngli doppler, mammoqrafiya, KT, MRT) və diaqnostik (angioqrafiya, biopsiya) müayinələr həyata keçirilir.',
    },
    {
      id: 3,
      img: '../../../assets/images/section3.svg',
      title: 'Laboratoriya',
      description:
        'Ümumi klinik, biokimyəvi, immunoferment, molekulyar (PZR) diaqnostik laborator analizlər beynəlxalq standartlara uyğun müasir analizatorlarda yüksəkixtisaslı həkim laborantlar tərəfindən aparılır.',
    },
    {
      id: 4,
      img: '../../../assets/images/section4.svg',
      title: 'Təcili yardım',
      description:
        'Əhaliyə təcili, təxirəsalınmaz və diaqnostik-müalicəvi xidmət göstərilir. AMBULANCE maşınları pasiyentlərə keyfiyyətli tibbi yardımın göstərilməsi üçün lazımi tibbi avadanlıqlarla tam təchiz olunub.',
    },
    {
      id: 5,
      img: '../../../assets/images/section5.svg',
      title: 'Stasionar',
      description:
        'Pasiyentlərin stasionarda rahatlığı və effektiv müalicəsi üçün komfortlu standart və VİP palatalar mövcuddur. Xəstələrin yaxınlarının qalması üçün tam şərait yaradılıb.',
    },
    {
      id: 6,
      img: '../../../assets/images/section6.svg',
      title: 'Peyvəndlər',
      description:
        'Mərkəzi Gömrük Hospitalı Avropa və Amerikanın etibarlı istehsalçılardan alınmış yüksəkkeyfiyyətli peyvəndləri Sizə təqdim edir. Peyvəndlərinizi vaxtında etdirin!',
    },
    {
      id: 7,
      img: '../../../assets/images/section1.svg',
      title: 'Poliklinika',
      description:
        'Hospitalda işləyən peşəkar həkimlərin - terapevt, pediatr, ginekoloq, cərrah, oftalmoloq, kardioloq, nefroloq, travmatoloq, LOR, stomatoloq və digərlərinin ambulator qəbuluna yazıla bilərsiniz.',
    },
    {
      id: 8,
      img: '../../../assets/images/section2.svg',
      title: 'Diaqnostika',
      description:
        'Hospitalda ən müasir tibbi diaqnostik avadanlıqlarla bütün növ radioloji (rentgen, USM, rəngli doppler, mammoqrafiya, KT, MRT) və diaqnostik (angioqrafiya, biopsiya) müayinələr həyata keçirilir.',
    },
    {
      id: 9,
      img: '../../../assets/images/section3.svg',
      title: 'Laboratoriya',
      description:
        'Ümumi klinik, biokimyəvi, immunoferment, molekulyar (PZR) diaqnostik laborator analizlər beynəlxalq standartlara uyğun müasir analizatorlarda yüksəkixtisaslı həkim laborantlar tərəfindən aparılır.',
    },
    {
      id: 10,
      img: '../../../assets/images/section4.svg',
      title: 'Təcili yardım',
      description:
        'Əhaliyə təcili, təxirəsalınmaz və diaqnostik-müalicəvi xidmət göstərilir. AMBULANCE maşınları pasiyentlərə keyfiyyətli tibbi yardımın göstərilməsi üçün lazımi tibbi avadanlıqlarla tam təchiz olunub.',
    },
    {
      id: 11,
      img: '../../../assets/images/section5.svg',
      title: 'Stasionar',
      description:
        'Pasiyentlərin stasionarda rahatlığı və effektiv müalicəsi üçün komfortlu standart və VİP palatalar mövcuddur. Xəstələrin yaxınlarının qalması üçün tam şərait yaradılıb.',
    },
    {
      id: 12,
      img: '../../../assets/images/section6.svg',
      title: 'Peyvəndlər',
      description:
        'Mərkəzi Gömrük Hospitalı Avropa və Amerikanın etibarlı istehsalçılardan alınmış yüksəkkeyfiyyətli peyvəndləri Sizə təqdim edir. Peyvəndlərinizi vaxtında etdirin!',
    },
  ];
}
