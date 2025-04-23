import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { SkillComponent } from '../skills/skill/skill.component';
import { TagComponent } from '../../shared/tag/tag.component';

@Component({
  selector: 'app-my-projects',
  imports: [ TranslocoDirective, SkillComponent, TagComponent ],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css'
})
export class MyProjectsComponent {

}
