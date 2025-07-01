import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: [],
  imports: [CommonModule],
  standalone: true,
})
export class SkillsComponent {
  skillCategories: any;
}
