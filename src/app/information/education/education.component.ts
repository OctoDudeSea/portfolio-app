import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { SkillComponent } from '../skills/skill/skill.component';
import { TagComponent } from '../../shared/tag/tag.component';

@Component({
  selector: 'app-education',
  imports: [ TranslocoDirective, SkillComponent, TagComponent ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

}
