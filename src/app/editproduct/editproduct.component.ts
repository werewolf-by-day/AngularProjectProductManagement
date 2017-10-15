import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../Product';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  products: Array<Product>;
  product: Product;

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _router: Router
  ) {

    this._productService.productsObservable
    .subscribe( (products) => {
      this.products = products;
    });

    this._route.params
    .subscribe( param => {
      for (let idx = 0; idx < this.products.length; idx++) {
        if (this.products[idx].id == param.id) {
          this.product = this.products[idx];
          break;
        }
      }
    });

  }

  ngOnInit() {
  }
  
  update(){
    this._productService.updateProducts(this.products);
    this._router.navigate(['products']);
  }

    deleteProduct(product) {
  	const idx = this.products.indexOf(product);
  	this.products.splice(idx, 1);
  	this._productService.updateProducts(this.products);
  }

}
