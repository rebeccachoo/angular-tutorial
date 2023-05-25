import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products = products;
  constructor() {}

  ngOnInit(): void {
    console.log(products);
  }
  share() {
    alert('shared!');
  }

  onNotify() {
    alert('You will be notified when the product goes on sale');
  }
}
