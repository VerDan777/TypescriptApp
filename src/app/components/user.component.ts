import {Component} from '@angular/core';
// import {PostService} from '../services/post.services.ts';

@Component ({
    selector:'user',
    templateUrl:`./user.component.html`,
    styleUrls:['user.component.css']
})
export class UserComponent  {
    
    name;
    lname;
    address;
    age;
    hobbies:string[];
    showhobbies:boolean;
    count=0;
    constructor() {
      this.name="app works!";
      this.lname="name";
      this.address= {
          street:"ulica",
          city:"kld",
          age:18
      }
       this.count=0;
      this.hobbies=['Music','Programming','Design'];
      this.showhobbies=false;
  }
  toogleHobbies() {
      alert("Click");
  }       
    addhobby(hobby) {
    this.hobbies.push(hobby);

  }
    delete(i) {
      this.hobbies.splice(i,1);  
    }
    
    click($event) :void  {
       this.count++;
    }
}
interface address {
    street:string;
    city:string;
    state:string;
}

