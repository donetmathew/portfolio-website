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
          timer:100
        },
        customCss:{
          color:""
        }
      },
      introSection:{
        title:"I'm a software engineer based in Mumbai, specializing in building exceptional websites, applications, and everything in between. Currently, I'm working with cool folks at Deloitte USI",
        customCss:{
          color:""
        }
      }
    },
    about:{
      titleSection:{
        sectionNumber:"01.",
        title:"About Me"
      },
      mainTitle:"About Me",
      profilePic:"assets/profile.jpg",
      description:`Hello! I'm Donet Mathew, a software engineer based in Mumbai. <br><br>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.<br><br> My goal is to always build products that provide pixel-perfect, performant experiences.`
    },
    experience:{
      titleSection:{
        sectionNumber:"02.",
        title:"Experience"
      },
      list:[
        {
          workplace:"Deloitte USI",
          designation:"Consultant",
          period:"October 2020 - Present",
          jobDescription:"lorem ispum 0"
        },
        {
          workplace:" GEP Worldwide",
          designation:"Web Engineer",
          period:"June 2019 - July 2020",
          jobDescription:"lorem ispum 1"
        },
        {
          workplace:"BTS",
          designation:"Frontend Developer",
          period:"November 2019 - July 2019",
          jobDescription:"lorem ispum 2"
        }
      ]
    },
    inspiringQuotesConfig:{
      carouselConfig:{
        list:[
        {
          title:"carousel 1"
        },
        {
          title:"carousel 2"
        },
        {
          title:"carousel 3"
        }
      ],
      previous:{
        title:"",
        img:""
      },
      next:{
        title:"",
        img:""
      }
    }

    }
  }

  getConfig(){
    return this.config;
  }
}
