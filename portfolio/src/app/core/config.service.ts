import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  public config:any={
    header:{
      logo:"Logo",
      section:[
        {
          title:"About"
        },
        {
          title:"Experience"
        },
        {
          title:"Work"
        },
        {
          title:"Contact"
        }
      ]
    },
    orientation:{
      left:[{
        icon:"",
        text:""
      },{
        icon:"",
        text:""
      },{
        icon:"",
        text:""
      },{
        icon:"",
        text:""
      }]
    }
  }
}
