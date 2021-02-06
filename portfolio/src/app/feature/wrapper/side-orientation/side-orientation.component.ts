import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-side-orientation',
  templateUrl: './side-orientation.component.html',
  styleUrls: ['./side-orientation.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SideOrientationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
