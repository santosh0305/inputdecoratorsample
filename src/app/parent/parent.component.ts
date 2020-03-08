import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  value = {
    'typeOfGoods': 'Electronic',
    'price': 100
  };
  age = 37;

  constructor() {
  }

  ngOnInit() {
  }

}