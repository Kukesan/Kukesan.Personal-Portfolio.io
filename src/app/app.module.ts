import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './info/info.component';
import { AchiveComponent } from './achive/achive.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { LandingComponent } from './landing/landing.component';
import { SkillsComponent } from './skills/skills.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { environment } from "../environments/environment";
import { IntroComponent } from './intro/intro.component';
import { OrganizationsComponent } from './experience/organizations/organizations.component';
import { CompetitionsComponent } from './experience/competitions/competitions.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CommentAddComponent } from './reviews/comment-add/comment-add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { provideFirebaseApp, initializeApp,FirebaseAppModule  } from '@angular/fire/app';
import { WorkComponent } from './experience/work/work.component';
import { PhotoshopComponent } from './entertainment/photoshop/photoshop.component';
import { PencilArtComponent } from './entertainment/pencil-art/pencil-art.component';
import { PhotographyComponent } from './entertainment/photography/photography.component';

const app = provideFirebaseApp(() => initializeApp(environment.firebaseConfig));


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    EducationComponent,
    ContactComponent,
    InfoComponent,
    AchiveComponent,
    ExperienceComponent,
    ProjectsComponent,
    LandingComponent,
    SkillsComponent,
    IntroComponent,
    OrganizationsComponent,
    CompetitionsComponent,
    EntertainmentComponent,
    ReviewsComponent,
    CommentAddComponent,
    WorkComponent,
    PhotoshopComponent,
    PencilArtComponent,
    PhotographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    FirebaseAppModule
  ],
  providers: [
    // app
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
