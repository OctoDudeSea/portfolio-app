import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, output, viewChildren } from '@angular/core';
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { MyProjectsComponent } from "./my-projects/my-projects.component";
import { ExperienceComponent } from "./experience/experience.component";
import { EducationComponent } from "./education/education.component";

@Component({
  selector: 'app-information',
  imports: [AboutComponent, SkillsComponent, MyProjectsComponent, ExperienceComponent, EducationComponent],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent implements AfterViewInit {
  activeIdEvent = output<string>();
  
  observer = new IntersectionObserver(elements => {
    if(elements[0].isIntersecting){
      this.activeIdEvent.emit(elements[0].target.id);
    }
  }, { threshold: 1 });

  content = viewChildren('content',{ read: ElementRef });
  
  ngAfterViewInit() {
    this.content().forEach(element => {
      this.observer.observe(element.nativeElement);
    });
  };
}
