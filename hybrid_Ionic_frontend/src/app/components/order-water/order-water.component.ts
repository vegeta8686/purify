import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-order-water',
  templateUrl: './order-water.component.html',
  styleUrls: ['./order-water.component.scss'],
})
export class OrderWaterComponent implements OnInit {
  @Input() products: Product[];
  constructor() { }

  ngOnInit() {

  }

}
