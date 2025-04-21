import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { SkillComponent } from '../skills/skill/skill.component';

@Component({
  selector: 'app-my-projects',
  imports: [ TranslocoDirective, SkillComponent ],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css'
})
export class MyProjectsComponent {

}
