import { Component, Input, OnInit, ChangeDetectionStrategy  } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class IntroComponent implements OnInit {

  constructor() { }
  @Input()config;

  ngOnInit(): void {
  }

}
