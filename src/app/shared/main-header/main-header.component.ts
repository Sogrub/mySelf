import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {
  @ViewChild('main') main!: ElementRef;
  @ViewChild('menuContainer') menuContainer!: ElementRef;

  toggleActive: boolean = false;

  constructor() {}

  openMenu() {
    this.toggleActive = !this.toggleActive;
    if ( this.toggleActive) {
      this.menuContainer.nativeElement.style.transform = 'scale(1)'
    } else {
      this.menuContainer.nativeElement.style.transform = 'scale(0)'
    }
  }
}
