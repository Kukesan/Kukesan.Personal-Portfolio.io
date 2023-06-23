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

const routes: Routes = [
  // {path:'',component:LandingComponent},
  {path:'',component:HomeComponent},
  {path:'education',component:EducationComponent},
  // {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'info',component:InfoComponent},
  {path:'experience',component:ExperienceComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'achive',component:AchiveComponent},
  {path:'skills',component:SkillsComponent},
  {path:'footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
