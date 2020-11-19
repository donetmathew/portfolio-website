import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/core/config.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  constructor(private serv:ConfigService) { }
  public config:any=this.serv.getConfig();
  public headerConfig=this.config.header;
  public introConfig=this.config.intro;

  ngOnInit(): void {
    
  }

}
