import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrl: './records.component.css'
})
export class RecordsComponent {

    headers = ['Id', 'Name', 'Age', 'Gender', 'Action']
    data = [];
    url = "http://127.0.0.1:8000/api/profiles"
    showDetail = false
    editView = false
    profile = null

    ngOnInit(): void{
      this.fetchData()
    }

    async fetchData(){
      await axios.get(this.url)
      .then(res => this.data = res.data.data)
      .catch(e => alert(e.response.data.message));
      
    } 

    async createProfile(data:object){      
      await axios.post(this.url, data)
      .then(res => this.fetchData())
      .catch(e => alert(e.response.data.message));
      
    }

    async deleteProfile(id:string){      
      await axios.delete(this.url + '/' + id)
      .then(res => this.fetchData())
      .catch(e => alert(e.response.data.message));
    }

    async showProfile(id:string){      
      await axios.get(this.url + '/' + id)
      .then(res => {
        this.profile = res.data.data
        this.editView = false
        this.showDetail = true;
      })
      .catch(e => alert(e.response.data.message));   
    }

    async updateProfile(data:any){     
      await axios.put(this.url + '/' +  data.id, data )
      .then(res => {
        this.profile = res.data.data
        this.editView = false
        this.showDetail = false;
        this.fetchData()
      })
      .catch(e => alert(e.response.data.message));   
    }

    editProfile(value:boolean){
      this.editView = value
    }
}
