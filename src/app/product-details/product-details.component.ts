import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  id: string | undefined;
  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id')!;
    this.product = products.find(
      (product) => Number(product.id) === Number(this.id)
    );
  }

  ngOnInit(): void {}
}
