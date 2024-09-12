import { Component, signal } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  courseName = 'Angular 18'
  stateName = 'Maharastra'

  firstName = signal("sajjad");

  constructor() {

  }

  showMessage(message: string) {
    alert(message);
  }

  changeCourseName() {
    this.courseName = 'React js'
    this.firstName.set("Hima")

  }



}
