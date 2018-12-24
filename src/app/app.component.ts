import { Component, EventEmitter } from '@angular/core';
import { Product } from './product/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  products: Product[];

  constructor(){
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),

      new Product(
        'MAKEUP',
        'Make-up Brush',
        '/assets/images/products/makeup-brush.png',
        ['Women', 'Makeup', 'Brushes'],
        109.99),

        new Product(
          'NiceSHOES',
          'Nice Red Shoes',
          '/assets/images/products/red-shoe.jpg',
          ['Men', 'Accessories', 'Running Shoes'],
          109.99)
    ]
  }
  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
