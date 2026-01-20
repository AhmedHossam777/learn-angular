import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { ProductsComponent } from './components/products/products';
import { ProductDetailComponent } from './components/product-detail/product-detail';
import { NotFoundComponent } from './components/not-found/not-found';

/**
 * ROUTING EXPLANATION:
 * 
 * 1. BASIC ROUTES: Simple path-to-component mapping
 *    - '' (empty path) redirects to '/home'
 *    - 'home' renders HomeComponent
 *    - 'about' renders AboutComponent
 * 
 * 2. ROUTE PARAMETERS: Dynamic segments in the URL
 *    - 'products/:id' - the ':id' is a parameter that can be accessed in the component
 *    - Example: /products/1, /products/2, etc.
 *    - The component reads this using ActivatedRoute service
 * 
 * 3. WILDCARD ROUTE: Catches all undefined routes
 *    - '**' matches any URL that doesn't match previous routes
 *    - MUST be the last route in the array
 *    - Used for 404 Not Found pages
 */
export const routes: Routes = [
  // Default route - redirects empty path to /home
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'  // Only redirect when the ENTIRE path is empty
  },
  
  // Basic static routes
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  
  // Route with child routes (products list)
  {
    path: 'products',
    component: ProductsComponent
  },
  
  // Route with parameter - :id is a dynamic parameter
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  
  // Wildcard route - MUST be last!
  // Catches any route that doesn't match the above
  {
    path: '**',
    component: NotFoundComponent
  }
];
