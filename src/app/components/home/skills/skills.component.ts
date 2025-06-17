import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styles: [],
  imports: [CommonModule],
})
export class SkillsComponent {
  skillCategories: any;
}
