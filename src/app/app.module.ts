import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppRouting from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { ProductModule } from './products/products.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { TokenInterceptor } from './helpers/token.inspector';
import { AddProductsComponent } from './products/add-products/add-products.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';  

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductsComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    ProductModule,
    HttpClientModule,
    AppRouting
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi   : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
