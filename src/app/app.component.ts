import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { SkillsComponent } from './components/skills/skills.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, TechnologiesComponent, SkillsComponent, ExperienceComponent, HomeComponent],
})
export class AppComponent {
  title = 'portfolio';
}
