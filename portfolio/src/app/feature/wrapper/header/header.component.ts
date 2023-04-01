import { asNativeElements, ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  constructor(private renderer:Renderer2) { }

  @Input() config;
  @ViewChild('sideMenu', { static: false }) sideMenu: ElementRef;
  @ViewChild('closeIcon', { static: false }) closeIcon: ElementRef;

  ngOnInit(): void {
   
  }

  onMenuClick(e){
    this.renderer.addClass(this.sideMenu.nativeElement,"side-menu");
    this.renderer.removeClass(this.sideMenu.nativeElement,"menu")
  }

  onClose(){
    this.renderer.removeClass(this.sideMenu.nativeElement,"side-menu");
    this.renderer.addClass(this.sideMenu.nativeElement,"menu")
  }

}
