import { Component, computed, input } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { InformationComponent } from './information/information.component';
import { LangSwitchComponent } from "./lang-switch/lang-switch.component";

@Component({
  selector: 'app-root',
  imports: [ NavbarComponent, InformationComponent, LangSwitchComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  activeInfoId = '';
}
