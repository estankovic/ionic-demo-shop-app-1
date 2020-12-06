import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetailPageRoutingModule } from './product-detail-routing.module';

import { ProductDetailPage } from './product-detail.page';
import {ImageContentHeaderDirective} from '../directives/image-content-header.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailPageRoutingModule
  ],
  declarations: [ProductDetailPage, ImageContentHeaderDirective]
})
export class ProductDetailPageModule {}
