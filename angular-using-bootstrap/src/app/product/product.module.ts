import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductUpdateComponent} from "./product-update/product-update.component";
import {ReactiveFormsModule} from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
