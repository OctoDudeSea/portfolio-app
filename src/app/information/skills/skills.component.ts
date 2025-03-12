import { Component } from '@angular/core';
import { SkillComponent } from "./skill/skill.component";
import { TagComponent } from "../../shared/tag/tag.component";

@Component({
  selector: 'app-skills',
  imports: [SkillComponent, TagComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
