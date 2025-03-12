import { Component } from '@angular/core';
import { SkillComponent } from "./skill/skill.component";
import { TagComponent } from "../../shared/tag/tag.component";
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-skills',
  imports: [SkillComponent, TagComponent, TranslocoDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
