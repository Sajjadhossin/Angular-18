import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.scss'
})
export class StructuralDirectiveComponent {
  isDiv1Visible = true;
  isDiv2Visible = true;
  num1 = ''
  num2 = ''
  isChecked : boolean = false;
  selectedState = '';
  cityList : String [] = ["Dhaka", "Pirojpur", "Barguna"]
  studentList : any [] = [
    {id:1 , name: "Sajjad", city: 'Pirojpur', isActive: true, gender: 'Male' },
    {id:2 , name: "Sakib", city: 'dhaka', isActive: true, gender: 'Male' },
    {id:3 , name: "hima", city: 'syleth', isActive: true, gender: 'Female' },
    {id:4 , name: "rajib", city: 'barguna', isActive: false, gender: 'Male' },
    {id:5 , name: "arpon", city: 'bramonbaria', isActive: false, gender: 'Male' },
  ]

  constructor() {}

  hide() {
    this.isDiv1Visible = false;
  }

  show() {
    this.isDiv1Visible = true;
  }

  toggle() {
    this.isDiv2Visible = !this.isDiv2Visible;
  }

}
