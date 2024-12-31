import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  @Input()config;
  skills = [
    { name: 'React Native', icon: 'src/app/public/aws.svg' },
    { name: 'Tailwind', icon: 'src/app/public/aws.svg' },
    { name: 'Bootstrap', icon: 'src/app/public/aws.svg' },
    { name: 'MaterialUI', icon: 'src/app/public/aws.svg' },
    { name: 'Git', icon: 'src/app/public/aws.svg' },
    { name: 'Docker', icon: 'src/app/public/aws.svg'},
    { name: 'Terraform', icon: 'src/app/public/aws.svg' },
    { name: 'React Native', icon: 'src/app/public/aws.svg' },
    { name: 'Tailwind', icon: 'src/app/public/aws.svg' },
    { name: 'Bootstrap', icon: 'src/app/public/aws.svg' },
    { name: 'MaterialUI', icon: 'src/app/public/aws.svg' },
    { name: 'Git', icon: 'src/app/public/aws.svg' },
    { name: 'Docker', icon: 'src/app/public/aws.svg'},
  ];
  constructor() { }
}
