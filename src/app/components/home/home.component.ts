import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from '../experience/experience.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, ExperienceComponent, TechnologiesComponent, SkillsComponent],
})
export class HomeComponent {
  name = 'Enrique Diez';
  title = 'Software Developer';
  description = `I'm a passionate aspiring Full-stack Web Developer with a focus on building web applications and pages, that deliver exceptional user experiences. I'm committed to continuous learning and eager to create innovative, user-friendly web solutions that make a positive impact.`;
}
