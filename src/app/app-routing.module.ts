import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { SectionsComponent } from './components/sections/sections.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { NewsComponent } from './components/news/news.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { OnlineLaboratoryComponent } from './components/online-laboratory/online-laboratory.component';
import { ContactComponent } from './components/contact/contact.component';
import { SectionDetailComponent } from './components/section-detail/section-detail.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { InformationComponent } from './components/information/information.component';
import { SuccessesComponent } from './components/successes/successes.component';
import { AnnouncementDetailComponent } from './components/announcement-detail/announcement-detail.component';
import { InformationDetailComponent } from './components/information-detail/information-detail.component';
import { SuccessesDetailComponent } from './components/successes-detail/successes-detail.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { GalleryDetailComponent } from './components/gallery-detail/gallery-detail.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';
import { VideoComponent } from './components/video/video.component';
import { LanguageWrapperComponent } from './components/language-wrapper/language-wrapper.component';
import { languageResolver } from './core/resolvers/language.resolver';

const routes: Routes = [
  {
    path: ':lang',
    component: LanguageWrapperComponent,
    resolve: { lang: languageResolver },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'main',
      },
      {
        path: 'main',
        component: MainComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'sections',
        component: SectionsComponent,
      },
      {
        path: 'section-detail/:title',
        component: SectionDetailComponent,
      },
      {
        path: 'doctors',
        component: DoctorsComponent,
      },
      {
        path: 'doctor-detail/:name',
        component: DoctorDetailsComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
      },
      {
        path: 'news-detail/:title',
        component: NewsDetailComponent,
      },
      {
        path: 'gallery',
        component: GalleryComponent,
      },
      {
        path: 'gallery-detail/:title',
        component: GalleryDetailComponent,
      },
      {
        path: 'video',
        component: VideoComponent,
      },
      {
        path: 'video-detail/:title',
        component: VideoDetailComponent,
      },
      {
        path: 'online-laboratory',
        component: OnlineLaboratoryComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'announcements',
        component: AnnouncementComponent,
      },
      {
        path: 'announcement-detail/:title',
        component: AnnouncementDetailComponent,
      },
      {
        path: 'information',
        component: InformationComponent,
      },
      {
        path: 'information-detail/:title',
        component: InformationDetailComponent,
      },
      {
        path: 'successes',
        component: SuccessesComponent,
      },
      {
        path: 'successes-detail/:title',
        component: SuccessesDetailComponent,
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'az',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
