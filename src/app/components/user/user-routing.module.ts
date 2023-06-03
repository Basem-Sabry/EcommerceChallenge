import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProductsComponent } from './products/products.component';
import { SingleCategoryComponent } from './products/single-category/single-category.component';
import { IndexComponent } from './products/index/index.component';
import { SingleProductComponent } from './products/single-product/single-product.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: ':category', component: SingleCategoryComponent },
  { path: 'product/:id', component: SingleProductComponent },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
