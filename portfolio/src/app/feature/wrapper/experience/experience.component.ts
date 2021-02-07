import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent implements OnInit {

  @Input() config;
  @ViewChild('list') list :ElementRef;
  public index = 0;

  constructor(private renderer :Renderer2) { }

  ngOnInit(): void {
    
  }

  showJobDesc(i, e){
    this.index=i;
   for (let index = 0; index < this.list.nativeElement.children.length; index++) {
     if(this.list.nativeElement.children[index].classList.contains("selected")){
      this.renderer.removeClass(this.list.nativeElement.children[index],"selected");
     }
   }
    this.renderer.addClass(e.target,"selected");
  }
  ngAfterViewInit(){
    this.renderer.addClass(this.list.nativeElement.childNodes[0],'selected');
  }

}
