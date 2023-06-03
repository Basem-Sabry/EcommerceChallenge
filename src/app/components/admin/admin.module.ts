import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from 'src/app/shared/pagination/pagination.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    EditProductComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MatButtonModule,
    MatMenuModule

  ],
})
export class AdminModule { }
