import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchiveComponent } from './achive/achive.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { LandingComponent } from './landing/landing.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { OrganizationsComponent } from './experience/organizations/organizations.component';
import { CompetitionsComponent } from './experience/competitions/competitions.component';
import { WorkComponent } from './experience/work/work.component';
import { PhotographyComponent } from './entertainment/photography/photography.component';
import { PencilArtComponent } from './entertainment/pencil-art/pencil-art.component';
import { PhotoshopComponent } from './entertainment/photoshop/photoshop.component';

const routes: Routes = [
  // {path:'',component:LandingComponent},
  { path: '', component: HomeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'info', component: InfoComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'achive', component: AchiveComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'footer', component: FooterComponent },
  {
    path: 'experience', component: ExperienceComponent, children: [
      { path: '', redirectTo: 'organizations', pathMatch: 'full' },
      { path: 'organizations', component: OrganizationsComponent },
      { path: 'work', component: WorkComponent },
      { path: 'competitions', component: CompetitionsComponent }
    ]
  },
  {
    path: 'entertainment', component: EntertainmentComponent, children: [
      { path: '', redirectTo: 'photography', pathMatch: 'full' },
      { path: 'photography', component: PhotographyComponent },
      { path: 'pencil-art', component: PencilArtComponent },
      { path: 'photoshop', component: PhotoshopComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
