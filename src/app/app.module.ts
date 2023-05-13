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
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
