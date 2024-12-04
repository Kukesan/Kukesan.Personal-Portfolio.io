import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LandingComponent } from './landing/landing.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { environment } from "../environments/environment";
import { SummaryComponent } from './summary/summary.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { provideFirebaseApp, initializeApp,FirebaseAppModule  } from '@angular/fire/app';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ServicesComponent } from './services/services.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectsComponent } from './projects/projects.component';

const app = provideFirebaseApp(() => initializeApp(environment.firebaseConfig));


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    LandingComponent,
    SummaryComponent,
    TechnologiesComponent,
    ServicesComponent,
    AboutmeComponent,
    ProjectsComponent
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
