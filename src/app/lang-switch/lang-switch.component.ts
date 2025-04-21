import { Component, inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-lang-switch',
  imports: [],
  templateUrl: './lang-switch.component.html',
  styleUrl: './lang-switch.component.css'
})
export class LangSwitchComponent {
  translocoService = inject(TranslocoService); 
  currentLang = this.translocoService.getActiveLang();


  changeLanguageTo(lang: string) {
    this.translocoService.setActiveLang(lang);
    this.currentLang = lang;
  }
}
