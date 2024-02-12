import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() emitProfile = new EventEmitter<object>();

   fname = ""
   age = ""
   gender = ""

  addForm() {    
    let data = {
      "name" : this.fname,
      "age" : this.age,
      "gender" : this.gender
    };

  this.fname = ""
  this.age = ""
  this.gender = ""
    
  this.emitProfile.emit(data);
}

}
