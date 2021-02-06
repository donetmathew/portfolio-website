import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent implements OnInit {

  @Input() config;
  public index = 0;

  constructor() { }

  ngOnInit(): void {
  }

  showJobDesc(i){
    this.index=i;
    console.log(this.config.list[this.index]);
    
  }

}
