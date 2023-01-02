import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('main') main!: ElementRef;
  @ViewChild('header') header!: ElementRef;

  toggleActive: boolean = false;
  menuActive: boolean = false;

  @HostListener('window:resize')
  onResize() {
    this.main.nativeElement.style.height = window.innerHeight + 'px';
  }

  @HostListener("window:scroll", ['$event'])
  onScroll(){
    this.header.nativeElement.classList.toggle('sticky', window.scrollY > 0);
    if (window.scrollY > 0) {
      this.menuActive = true;
    } else {
      this.menuActive = false;
    }
  }

  constructor() { 
    
  }
  ngAfterViewInit(): void {
    this.main.nativeElement.style.height = window.innerHeight + 'px';
  }

  ngOnInit(): void {
  }

}
