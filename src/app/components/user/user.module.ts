import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserProductsComponent } from './products/products.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SingleProductComponent } from './products/single-product/single-product.component';
import { SingleCategoryComponent } from './products/single-category/single-category.component';
import { AllProductsComponent } from 'src/app/shared/all-products/all-products.component';
import { IndexComponent } from './products/index/index.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { TranslateModule } from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    UserProductsComponent,
    SingleProductComponent,
    SingleCategoryComponent,
    AllProductsComponent,
    IndexComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CarouselModule,
    MatExpansionModule,
    TranslateModule,
    MatButtonModule,
    MatMenuModule
  ]
})
export class UserModule { }
