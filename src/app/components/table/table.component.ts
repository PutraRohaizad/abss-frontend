import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent {

  @Input() headers : any
  @Input() data : any

  @Output() emitDeleteProfile = new EventEmitter<string>();
  @Output() emitShowProfile = new EventEmitter<string>();

  deleteData(id:string){
    if(confirm('Delete this data?')){
      this.emitDeleteProfile.emit(id);
    }
  }

  showData(id:string){
      this.emitShowProfile.emit(id);
  }


}
