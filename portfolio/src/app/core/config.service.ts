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
          id:"#contact"
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
        title:"I am",
        typedAnimationCoonfig:{
          words:["a software engineer","a web specialist","an accessibility expert"],
          timer:100
        },
        customCss:{
          color:""
        }
      },
      introSection:{
        title:"I'm a software engineer based in United States with 8 years of experience specialized in building exceptional websites, native apps, and everything in between. Currently, I'm working with cool folks at",
        customCss:{
          color:""
        },
        companyName:"The Walt Disney"
      }
    },
    about:{
      titleSection:{
        sectionNumber:"01.",
        title:"About Me"
      },
      mainTitle:"About Me",
      profilePic:"assets/profile.jpg",
      description:`Hello! I'm Donet Mathew, a software engineer based in Florida, United States. <br><br>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.<br><br> My goal is to always build products that provide pixel-perfect, performant experiences.`
    },
    experience:{
      titleSection:{
        sectionNumber:"02.",
        title:"Experience"
      },
      list:[
        {
          workplace:"The Walt Disney",
          designation:"Software Engineer ||",
          period:"Apr 2024 - Sept 2024",
          jobDescription:[
            {
              list:"Elevating the Disney magic through innovative digital experiences across our resorts, parks and guest experiences.",
            },
            {
              list:"Built and maintained dynamic, accesible web applicartions for Disney's resorts and parks, ensuring compliance with WCAG standards."
            },
            {
              list:"Integrated and leveraged analytic tools to monitor user behaviour,identify trends and optimize application performance for high traffic platforms."
            },
            {
              list:"Designed and implemented RESTful APIs using Node.js and Express, enabling seamless communication between frontend applications and backend services."
            }
          ]
        },
        {
          workplace:"Citi Bank",
          designation:"Specialist Software Engineer",
          period:"Apr 2024 - Sept 2024",
          jobDescription:[
            {
              list:"Worked at Citi Bank (via LTIMindtree) on a product to develop comprehensive reports for capital forecasting and assumptions planning, enhancing decision-making processes and financial strategy"
            },
            {
              list:"Migrated a traditional grid to AG-Grid at Citi,implementing business logic and features like inline editing, sorting, pagination, drag and drop, and optimizing performance for large datasets"
            }
          ]
        },
        {
          workplace:"Deloitte USI",
          designation:"Senior Consultant",
          period:"Oct 2020 - Dec 2023",
          jobDescription:[
            {
              list:"Led a team to orchestrate the end-to-end dvelopment of a cross platform mobile app, revolutionizing sales support for employees."
            },
            {
              list:"Implemented biometric authentication(fingerprint and facial recognition) for the app, enhancing security and streamlining the user experience."
            },
            {
              list:"Developed web APIs using Node.js, AWS Lambda and AWS Fargate, leveraging serverless and containerized solutions."
            },
            {
              list:"Involved in the development of a progressive web app (PWA) for an insurance client, driving the project from ideation to successful delivery. Played a key role in designing, implementing and optimizing the application to meet client requirements and enhance user experience. "
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
    skills:{
      titleSection:{
        sectionNumber:"03.",
        title:"Skills"
      },
    },
    inspiringQuotesConfig:{
      titleSection:{
        sectionNumber:"04.",
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

    },
    contact: {
      titleSection:{
        sectionNumber:"03.",
        title:"Contact"
      },
      contactConfig:[
      {
        label: "Name",
        type: "text",
        placeholder: "Enter your name",
        controlName: "name",
        validators: {
          required: true,
          minLength: 3,
        },
      },
      {
        label: "Email",
        type: "email",
        placeholder: "Enter your email",
        controlName: "email",
        validators: {
          required: true,
          email: true,
        },
      },
      {
        label: "Message",
        type: "textarea",
        placeholder: "Write your message",
        controlName: "message",
        validators: {
          required: true,
          minLength: 10,
        },
      },
    ]}    
  }

  getConfig(){
    return this.config;
  }
}
