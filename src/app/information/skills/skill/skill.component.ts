import { Component, input } from '@angular/core';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  title = input<string>('Title');
  description = input<string>('Description');
  content = input<string>('Content');
}
