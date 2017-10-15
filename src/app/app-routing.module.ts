import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', pathMatch: 'full', component: HomeComponent },
	{ path: 'home', pathMatch: 'full', component: HomeComponent },
	{ path: 'products', pathMatch: 'full', component: ProductslistComponent },
	{ path: 'products/edit/:id', pathMatch: 'full', component: EditproductComponent },
	{ path: 'products/new', pathMatch: 'full', component: NewproductComponent }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

export const routing = RouterModule.forRoot(routes);
