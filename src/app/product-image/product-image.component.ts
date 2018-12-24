import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'product-image',
  template: `
  <img class="product-image" [src]="product.imgUrl"
  `,
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';

  constructor() { }

}
