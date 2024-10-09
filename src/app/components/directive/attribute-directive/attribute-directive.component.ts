import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.scss']  // Corrected to styleUrls
})
export class AttributeDirectiveComponent {

  div1bgColor: string = 'bg-warning';
  div2Active: boolean = false;
  toogleBtnText = 'Toggle';
  toogleBtnClass = 'btn-danger';  // Default button class
  num1: number = 0;
  num2: number = 0;
  isChecked: boolean = false;
  studentList : any [] = [
    {id:1 , name: "Sajjad", city: 'Pirojpur', isActive: true, gender: 'Male', totalMarks: 85 },
    {id:2 , name: "Sakib", city: 'dhaka', isActive: true, gender: 'Male', totalMarks: 92 },
    {id:3 , name: "hima", city: 'syleth', isActive: true, gender: 'Female', totalMarks: 78 },
    {id:4 , name: "rajib", city: 'barguna', isActive: false, gender: 'Male', totalMarks: 65 },
    {id:5 , name: "arpon", city: 'bramonbaria', isActive: false, gender: 'Male', totalMarks: 70 },
  ]

  constructor() {
  }

  addRed() {
    this.div1bgColor = 'bg-danger';
  }

  addBlue() {
    this.div1bgColor = 'bg-primary';
  }

  toogle() {
    this.div2Active = !this.div2Active;
    // Change button text and color
    this.toogleBtnClass = this.div2Active ? 'btn-success' : 'btn-danger';
  }
}
