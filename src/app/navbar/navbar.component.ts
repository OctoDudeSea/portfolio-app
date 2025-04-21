import { ViewportScroller } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [ RouterLink ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit {
  links = [
    {name: 'Sobre mi', link: 'about'},
    {name: 'Habilidades', link: 'skills'},
    {name: 'Proyectos', link: 'my-projects'},
    {name: 'Experiencia', link: 'experience'},
    {name: 'Educacion', link: 'education'}
  ];
  
  scroller = inject(ViewportScroller);
  currentAnchor = input('about');

  ngOnInit() {
    this.scroller.setOffset([0, 128])
  }

  scrollToAnchor( anchor: string ){
     this.scroller.scrollToAnchor(anchor);
  }


}
