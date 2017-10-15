import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  products = [
  	new Product(1, 'Scouter', 9999.99, '../../assets/scouter.png'),
  	new Product(2, 'Awesome-O 4000', 50000.00, '../../assets/awesomeo.png')
  ];

    constructor(private _productService: ProductService) {
    this._productService.updateProducts(this.products);
    this._productService.productsObservable.subscribe( (products) => {
      this.products = products;
    });
  }
}
