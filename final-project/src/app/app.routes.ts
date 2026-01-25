import {Routes} from '@angular/router';
import {Products} from './components/products/products';
import {Home} from './components/home/home';
import {ProductDetails} from './components/product-details/product-details';
import {UpdateProduct} from './components/update-product/update-product';
import {NotFound} from './components/not-found/not-found';
import {CreateProduct} from './components/create-product/create-product';

export const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: Home},
  {path: "products", component: Products},
  {path: "products/:id", component: ProductDetails},
  {path: "update-product/:id", component: UpdateProduct},
  {path: "create-product", component: CreateProduct},
  {path: "**", component: NotFound}
];
