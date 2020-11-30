import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  private config:any={
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
    },
    intro:{
      introHeader:{
        title:"Hi, My name is",
        customCss:{
          color:""
        }
      },
      introSubHeader:{
        title:"Donet Mathew",
        customCss:{
          color:""
        }
      },
      introDescription:{
        title:"I am a",
        typedAnimationCoonfig:{
          words:["Frontend Developer","Fitness enthusiast","Proud Indian"],
          timer:400
        },
        customCss:{
          color:""
        }
      },
      introSection:{
        title:"I'm a software engineer based in Mumbai, specializing in building exceptional websites, applications, and everything in between. I am currently working with cool folks at Deloitte USI.",
        customCss:{
          color:""
        }
      }
    }
  }

  getConfig(){
    return this.config;
  }
}
