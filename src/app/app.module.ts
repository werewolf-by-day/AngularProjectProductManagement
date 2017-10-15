import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProductService } from './product.service';
import { routing } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { NewproductComponent } from './newproduct/newproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductslistComponent,
    EditproductComponent,
    NewproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
