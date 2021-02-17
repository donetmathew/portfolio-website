import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild, HostListener, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {

  @Input() config;
  @ViewChild('carouselTrack') carouselTrack:ElementRef;
  public carouselWidth;
  public carouselSlides;
  

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
    console.log(this.config);
    
  }
  ngAfterViewInit(){
   this.setCarouselWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setCarouselWidth();
  }

  setCarouselWidth(){
   this.carouselWidth=this.carouselTrack.nativeElement.getBoundingClientRect().width;
   this.carouselSlides= Array.from(this.carouselTrack.nativeElement.children);
   this.carouselSlides.map((el:any,i)=>{
      el.style.left=this.carouselWidth * i + "px";
      if(i==0){
        this.renderer.addClass(el,"current-slide");
      }
    });
  }

  nextBtnClick(e){
    let currentSlide=this.carouselTrack.nativeElement.querySelector(".current-slide");
    let nextSlide;
    currentSlide.nextElementSibling ? nextSlide=currentSlide.nextElementSibling : nextSlide=this.carouselSlides[0]
    this.moveSlide(currentSlide,nextSlide);
  }

  prevBtnClick(e){
    let currentSlide=this.carouselTrack.nativeElement.querySelector(".current-slide");
    let previousSlide;
    currentSlide.previousElementSibling ? previousSlide=currentSlide.previousElementSibling : previousSlide=this.carouselSlides[this.carouselSlides.length-1]
    this.moveSlide(currentSlide,previousSlide);
  }

  moveSlide(currentSlide,targetSlide){
    this.renderer.removeClass(currentSlide,"current-slide");
    this.carouselTrack.nativeElement.style.transform=`translateX(-${targetSlide.style.left})`;
    this.renderer.addClass(targetSlide,"current-slide");
  }

}
