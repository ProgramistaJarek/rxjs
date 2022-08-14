import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchProductsComponent } from './search-products.component';
import { ProductComponent } from '../../components/product/product.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [SearchProductsComponent, ProductComponent],
  exports: [SearchProductsComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
})
export class SearchProductsModule {}
