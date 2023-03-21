import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 name="Sejal";
 display()
 {
  console.log("a button is clicked...")
  alert("HI ANKITA HOW are U???")
 }
uname=new FormControl('')
updateName(){
  this.uname.setValue("amitava")
}
}
