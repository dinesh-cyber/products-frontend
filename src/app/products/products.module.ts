import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'
import { ProductsComponent } from './products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Route[] = [
  
    { path: '', component: ProductsComponent,
        children: [
            {path: 'add-product', component: AddProductsComponent},
            {path: '', component: ProductsListComponent},
        ]
    }
  ];


@NgModule({
    declarations: [
      
    ],

    imports: [
      RouterModule.forChild(routes),
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
    ],
    providers: []
  })
export class ProductModule { }