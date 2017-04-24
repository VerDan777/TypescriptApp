import {Component} from '@angular/core';

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
  
    constructor() {
      this.name="app works!";
      this.lname="name";
      this.address= {
          street:"ulica",
          city:"kld",
          age:18
      }
      this.hobbies=['Music','Programming','Design'];
      this.showhobbies=false;
  }
  toogleHobbies() {
      alert("Click");
  }
    addhobby(value) {
        

  }
}
interface address {
    street:string;
    city:string;
    state:string;
}

