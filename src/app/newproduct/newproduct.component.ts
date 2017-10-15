import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from './../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  newProduct: Product = new Product();
  products: Array<Product>;

  constructor(
    private _produceService: ProductService,
    private _router: Router
  ) {
    this._produceService.productsObservable.subscribe( (products) => {
      this.products = products;
    })
  }

  ngOnInit() {
    this.newProduct = new Product();
  }

  create() {
    if (this.newProduct.imgUrl.length < 1 ||
        this.newProduct.imgUrl === 'null' ||
        this.newProduct.imgUrl === null) {
        this.newProduct.imgUrl = null;
        }
    this.products.push(this.newProduct);
    this._produceService.updateProducts(this.products);
    this.newProduct = new Product();
    this._router.navigate(['products']);
  }

}