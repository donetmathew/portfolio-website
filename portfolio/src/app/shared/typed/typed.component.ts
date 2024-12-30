import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-typed',
  templateUrl: './typed.component.html',
  styleUrls: ['./typed.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TypedComponent implements OnInit {

  @Input() config;
  @ViewChild('typedElement') typedElement: ElementRef;
  public currentIndex = 0;
  public isDeleting: Boolean = false;
  public txt = "";
  // public typed = new Typed('#element', {
  //   strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  //   typeSpeed: 50,
  // });

  constructor(private renderer: Renderer2, private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    const typed=new Typed('#element', {
        strings: this.config.words,
        typeSpeed: 70,
        loop: true,
        showCursor: false,
       });
    //this.type();

  }
  // type() {

  //   var currentWord = this.config.words[this.currentIndex];
  //   let delay = this.config.timer;

  //   if (this.isDeleting) {
  //     this.txt = currentWord.substring(0, this.txt.length - 1);
  //   }
  //   else {
  //     this.txt = currentWord.substring(0, this.txt.length + 1)
  //   }

  //   if (!this.isDeleting && this.txt === currentWord) {
  //     delay = 2000;
  //     this.isDeleting = true;
  //   }

  //   else if (this.isDeleting && this.txt == "") {
  //     this.isDeleting = false;
  //     this.currentIndex++;
  //     if (this.currentIndex > this.config.words.length - 1) {
  //       this.currentIndex = 0;
  //     }
  //   }
  //   else if (this.isDeleting) {
  //     delay /= 4;
  //   }

  //   setTimeout(() => {
  //     this.type();
  //     this.cd.detectChanges();
  //   }, delay)
  // }
}
