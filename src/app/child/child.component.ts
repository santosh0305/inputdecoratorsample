import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input("age") age;
  @Input("childObject") childObject;

  typeOfGoods : string;
  price : number;
  errMsg : string;

  constructor() { }

  ngOnInit() {
    if(this.childObject != null){
      this.typeOfGoods = this.childObject.typeOfGoods;
      this.price = this.childObject.price;
    }
    else{
      this.errMsg = "No data found";
    }
  }
}