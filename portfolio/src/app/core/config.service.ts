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
          title:"About",
          id:"#about"
        },
        {
          title:"Experience",
          id:"#experience"
        },
        {
          title:"Contact",
          id:"#footer"
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
          jobDescription:[
            {
              list:"Created responsive UI and web components in a CMS for the client Google."
            },
            {
              list:"Worked on web accessibility so as to make the website compatible to disabled people."
            },
            {
              list:"Contributed in the ideation phase for the client Abbvie."
            }
          ]
        },
        {
          workplace:"GEP Worldwide",
          designation:"Web Engineer",
          period:"June 2019 - July 2020",
          jobDescription:[
            {
              list:"Built reuseable and efficient components using Angular 7 framework."
            },
            {
              list:"Developed the architecture for the module SPEND in the product 'Smart By GEP'."
            },
            {
              list:"Developed complex grids and highcharts using AG-grid and Highcharts."
            },
            {
              list:"Trained several interns and junior developers for Angular framework."
            }
          ]
        },
        {
          workplace:"BTS",
          designation:"Frontend Developer",
          period:"November 2017 - July 2019",
          jobDescription:[
            {
              list:"Liasing with overseas consultants to implement digital solution for clients through development, customization and productionizing end solutions with high quality"
            },
            {
              list:"Implemented and designed an e-learning product 'Know The Business' for clients IBM, Mckinsey and STC."
            },
            {
              list:"Customized the product PULSE for the client SAP MLL and TD Bank using Vanilla JavaScript."
            },
            {
              list:"Participated in complete product development cycle from ideation to implementation for in-house product 'Generic MBS' under agile framework."
            }
          ]
        }
      ]
    },
    inspiringQuotesConfig:{
      titleSection:{
        sectionNumber:"03.",
        title:"Inspiring Quotes"
      },
      carouselConfig:{
        list:[
        {
          title:"Stay hungry, Stay Foolish"
        },
        {
          title:"Have the courage to follow your heart and intuition. They somehow know what you truly want to become"
        },
        {
          title:"The greatest risk in life is not taking any risks"
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
