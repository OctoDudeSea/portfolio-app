import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { SkillComponent } from '../skills/skill/skill.component';
import { TagComponent } from '../../shared/tag/tag.component';

@Component({
  selector: 'app-experience',
  imports: [ TranslocoDirective, SkillComponent, TagComponent ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

}
