import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  @Input() profile : any
  @Input() editView : any
  @Output() emitEditProfile = new EventEmitter<boolean>();
  @Output() emitUpdateProfile = new EventEmitter<object>();

  fname = ""
  age = ""
  gender = ""

  editData(){
    this.fname = this.profile.name
    this.age = this.profile.age
    this.gender = this.profile.gender
    
    this.emitEditProfile.emit(true);
  }

  updateData(){
    let data = {
      "id" : this.profile.id,
      "name" : this.fname,
      "age" : this.age,
      "gender" : this.gender
    };
    
    this.emitUpdateProfile.emit(data);
  }


}
