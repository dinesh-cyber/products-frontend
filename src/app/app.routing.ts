import {  Route, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routes: Route[] = [
	{ path: '', component: HomeComponent },
	{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductModule)},
    { path: '**', redirectTo: '' }
];

const AppRouting = RouterModule.forRoot(routes, {
	preloadingStrategy: PreloadAllModules
});

export default AppRouting;