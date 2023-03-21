import { Component } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {

  products=[
   {
    name:'LED',
    brand:'SONY',
    price:50000
   },
   {
    name:'QLED',
    brand:'SAMSUNG',
    price:70000
   },
   {
    name:'OLED',
    brand:'SONY',
    price:90000
   },
   {
    name:'OLED',
    brand:'LG',
    price:55000
   },
   {
    name:'LCD',
   brand:'MI',
   price:30000},
   {
    name:'FRAME',
    brand:'SAMSUNG',
    price:88000
   }
  ]

}
