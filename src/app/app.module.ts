import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { SectionsComponent } from './components/sections/sections.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { NewsComponent } from './components/news/news.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { OnlineLaboratoryComponent } from './components/online-laboratory/online-laboratory.component';
import { ContactComponent } from './components/contact/contact.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { WhHeaderComponent } from './shared/wh-header/wh-header.component';
import { DividerModule } from 'primeng/divider';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AnnouncementDialogComponent } from './components/dialogs/announcement-dialog/announcement-dialog.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SectionsCarouselComponent } from './components/carousels/main/sections-carousel/sections-carousel.component';
import { DoctorsCarouselComponent } from './components/carousels/main/doctors-carousel/doctors-carousel.component';
import { TestimonialsCarouselComponent } from './components/carousels/main/testimonials-carousel/testimonials-carousel.component';
import { AnnouncementCarouselComponent } from './components/carousels/main/announcement-carousel/announcement-carousel.component';
import { AboutCarouselComponent } from './components/carousels/about/about-carousel/about-carousel.component';
import { SectionDetailComponent } from './components/section-detail/section-detail.component';
import { SectionDetailCarouselComponent } from './components/carousels/section/section-detail-carousel/section-detail-carousel.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { DoctorDetailCarouselComponent } from './components/carousels/doctors/doctor-detail-carousel/doctor-detail-carousel.component';
import { SuccessesComponent } from './components/successes/successes.component';
import { InformationComponent } from './components/information/information.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { SuccessesDetailComponent } from './components/successes-detail/successes-detail.component';
import { InformationDetailComponent } from './components/information-detail/information-detail.component';
import { AnnouncementDetailComponent } from './components/announcement-detail/announcement-detail.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { InformationDetailCarouselComponent } from './components/carousels/information/information-detail-carousel/information-detail-carousel.component';
import { SuccessDetailCarouselComponent } from './components/carousels/successes/success-detail-carousel/success-detail-carousel.component';
import { NewsDetailCarouselComponent } from './components/carousels/news/news-detail-carousel/news-detail-carousel.component';
import { AnnouncementDetailCarouselComponent } from './components/carousels/announcement/announcement-detail-carousel/announcement-detail-carousel.component';
import { VideoComponent } from './components/video/video.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';
import { GalleryDetailComponent } from './components/gallery-detail/gallery-detail.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LangService } from './core/services/lang.service';
import { HomePagesService } from './core/services/homepages.service';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentsService } from './core/services/departments.service';
import { DoctorsService } from './core/services/doctors.service';
import { NewsService } from './core/services/news.service';
import { TestimonialsService } from './core/services/testimonials.service';
import { AdvertisementsService } from './core/services/advertisements.service';
import { UsefulLinkService } from './core/services/usefulLinks.service';
import { FooterService } from './core/services/footer.service';
import { FeedbackAndSuggestionsPagesService } from './core/services/feedbackAndSuggestionsPages.service';
import { ContactService } from './core/services/contact.service';
import { EmergencyCallComponent } from './shared/emergency-call/emergency-call.component';
import { LanguageWrapperComponent } from './components/language-wrapper/language-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SectionsComponent,
    DoctorsComponent,
    NewsComponent,
    NewsDetailComponent,
    GalleryComponent,
    VideoComponent,
    OnlineLaboratoryComponent,
    ContactComponent,
    SidebarComponent,
    WhHeaderComponent,
    SectionsCarouselComponent,
    DoctorsCarouselComponent,
    TestimonialsCarouselComponent,
    AnnouncementCarouselComponent,
    AnnouncementDialogComponent,
    AboutCarouselComponent,
    SectionDetailComponent,
    SectionDetailCarouselComponent,
    DoctorDetailsComponent,
    DoctorDetailCarouselComponent,
    SuccessesComponent,
    SuccessesDetailComponent,
    InformationComponent,
    InformationDetailComponent,
    AnnouncementComponent,
    AnnouncementDetailComponent,
    InformationDetailCarouselComponent,
    SuccessDetailCarouselComponent,
    NewsDetailCarouselComponent,
    AnnouncementDetailCarouselComponent,
    VideoComponent,
    VideoDetailComponent,
    GalleryDetailComponent,
    EmergencyCallComponent,
    LanguageWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    IconFieldModule,
    InputIconModule,
    InputGroupModule,
    InputGroupAddonModule,
    DividerModule,
    CarouselModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    LangService,
    HomePagesService,
    DepartmentsService,
    DoctorsService,
    NewsService,
    TestimonialsService,
    AdvertisementsService,
    UsefulLinkService,
    FooterService,
    FeedbackAndSuggestionsPagesService,
    ContactService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
