import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { LoaderComponent } from './components/loader/loader.component';

import { MyInterceptor } from './utilities/authInterceptor.service';

import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SearchProductsModule } from './components/search-products/search-products.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CategoriesComponent,
    CategoryComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatListModule,
    MatSnackBarModule,
    SearchProductsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
