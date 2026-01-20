# Angular Routing Tutorial 🚀

This project demonstrates Angular routing concepts step-by-step. Let's learn how routing works!

## 📚 What is Routing?

Routing in Angular allows you to navigate between different views/components in a Single Page Application (SPA) without reloading the page. It maps URL paths to components.

## 🗂️ Project Structure

```
src/app/
├── components/
│   ├── home/              # Landing page
│   ├── about/             # About page (static route)
│   ├── products/          # Products list
│   ├── product-detail/    # Product details (uses route parameters)
│   └── not-found/         # 404 page (wildcard route)
├── app.routes.ts          # Route configuration (MOST IMPORTANT!)
├── app.config.ts          # App configuration with router provider
├── app.ts                 # Main app component
└── app.html               # Main template with navigation
```

## 🔑 Key Routing Concepts Demonstrated

### 1. **Router Configuration** (`app.routes.ts`)

This is where you define all your routes:

```typescript
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: '**', component: NotFoundComponent }
];
```

**Explanation:**
- Each route object has a `path` (URL) and a `component` to display
- Routes are checked in order from top to bottom
- First matching route wins!

### 2. **Router Provider** (`app.config.ts`)

The router must be registered in your app configuration:

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)  // This enables routing!
  ]
};
```

### 3. **RouterOutlet** (`app.html`)

This is a placeholder where routed components will be displayed:

```html
<router-outlet />
```

**How it works:**
- When you navigate to `/home`, Angular renders `HomeComponent` inside `<router-outlet>`
- When you navigate to `/about`, Angular replaces it with `AboutComponent`
- It's like a dynamic content area!

### 4. **RouterLink** (Navigation)

Instead of regular `<a href>`, use `routerLink` to navigate:

```html
<!-- ❌ Don't use this (causes page reload) -->
<a href="/home">Home</a>

<!-- ✅ Use this (no page reload, SPA navigation) -->
<a routerLink="/home">Home</a>
```

**RouterLink Array Syntax:**
```html
<!-- Navigate to /products/1 -->
<a [routerLink]="['/products', product.id]">View Product</a>
```

### 5. **RouterLinkActive** (Highlight Active Links)

Automatically adds a CSS class to active links:

```html
<a routerLink="/home" routerLinkActive="active">Home</a>
```

When the current URL is `/home`, the `active` class is added to the link.

**Options:**
```html
<!-- Only active when EXACTLY /home (not /home/something) -->
<a routerLink="/home" 
   routerLinkActive="active" 
   [routerLinkActiveOptions]="{exact: true}">
  Home
</a>
```

## 📋 Route Types Explained

### A. Basic Static Routes

**Definition:**
```typescript
{ path: 'about', component: AboutComponent }
```

**URL:** `http://localhost:4200/about`

**Use Case:** Pages with fixed content like About, Contact, etc.

---

### B. Default Route (Redirect)

**Definition:**
```typescript
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}
```

**What it does:** When user visits `http://localhost:4200`, they're redirected to `/home`

**pathMatch options:**
- `'full'`: Only redirect if the ENTIRE path matches (recommended for root)
- `'prefix'`: Redirect if path STARTS with the pattern

---

### C. Route Parameters (Dynamic Routes)

**Definition:**
```typescript
{ path: 'products/:id', component: ProductDetailComponent }
```

**URLs:** 
- `http://localhost:4200/products/1`
- `http://localhost:4200/products/2`
- `http://localhost:4200/products/999`

**Reading parameters in component:**

```typescript
import { ActivatedRoute } from '@angular/router';

export class ProductDetailComponent implements OnInit {
  productId: string | null = null;
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    // Method 1: Snapshot (one-time read)
    this.productId = this.route.snapshot.paramMap.get('id');
    
    // Method 2: Observable (reacts to changes)
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
    });
  }
}
```

**When to use snapshot vs observable:**
- **Snapshot**: When navigating FROM a different component
- **Observable**: When navigating from the SAME component with different params

---

### D. Wildcard Route (404 Not Found)

**Definition:**
```typescript
{ path: '**', component: NotFoundComponent }
```

**What it does:** Catches ALL routes that don't match previous routes

**IMPORTANT:** Must be the LAST route in the array!

**Example:** User visits `/random-page-that-doesnt-exist` → Shows NotFoundComponent

---

## 🛠️ How to Run This Example

1. **Start the development server:**
   ```bash
   cd /home/aldod/Documents/iti/ITI-9\ month/learn-angular/practice
   npm start
   ```

2. **Open browser:** Navigate to `http://localhost:4200`

3. **Try these URLs manually:**
   - `http://localhost:4200` → Redirects to `/home`
   - `http://localhost:4200/home` → Home page
   - `http://localhost:4200/about` → About page
   - `http://localhost:4200/products` → Products list
   - `http://localhost:4200/products/1` → Product detail for ID 1
   - `http://localhost:4200/products/2` → Product detail for ID 2
   - `http://localhost:4200/random` → 404 Not Found page

4. **Use the navigation bar:** Click links to see routing in action!

---

## 🎯 Learning Exercises

Try these to deepen your understanding:

1. **Add a Contact Page:**
   - Create a new component `ContactComponent`
   - Add route: `{ path: 'contact', component: ContactComponent }`
   - Add navigation link in the navbar

2. **Add Query Parameters:**
   - Modify products list to filter by category
   - URL: `/products?category=electronics`
   - Read with: `this.route.snapshot.queryParamMap.get('category')`

3. **Programmatic Navigation:**
   - Inject `Router` in a component
   - Navigate from TypeScript: `this.router.navigate(['/home'])`

4. **Route Guards:**
   - Create a guard to protect certain routes
   - Require authentication before accessing a page

---

## 🔍 Common Routing Patterns

### Pattern 1: List-Detail Navigation

```typescript
// Routes
{ path: 'products', component: ProductsListComponent }
{ path: 'products/:id', component: ProductDetailComponent }
```

```html
<!-- In ProductsListComponent -->
<a [routerLink]="['/products', product.id]">{{ product.name }}</a>
```

### Pattern 2: Back Navigation

```typescript
import { Location } from '@angular/common';

constructor(private location: Location) {}

goBack() {
  this.location.back();
}
```

### Pattern 3: Navigation with Query Params

```html
<!-- Navigate to /search?q=laptop -->
<a [routerLink]="['/search']" [queryParams]="{q: 'laptop'}">Search</a>
```

```typescript
// Read query params
this.route.queryParams.subscribe(params => {
  const searchQuery = params['q'];
});
```

---

## 📖 Key Takeaways

1. **RouterOutlet** = Where components are displayed
2. **RouterLink** = How to navigate between routes
3. **RouterLinkActive** = How to style active links
4. **ActivatedRoute** = How to read route parameters
5. **Route order matters** = First match wins!
6. **Wildcard route** = Must be last!

---

## 🎓 Next Steps

After mastering basic routing, explore:
- **Lazy Loading**: Load modules on-demand for better performance
- **Route Guards**: Control access to routes (canActivate, canDeactivate)
- **Resolvers**: Pre-fetch data before loading a route
- **Child Routes**: Nested routing for complex UIs
- **Auxiliary Routes**: Multiple router-outlets

---

## 📚 Resources

- [Official Angular Router Guide](https://angular.dev/guide/routing)
- [RouterLink API](https://angular.dev/api/router/RouterLink)
- [ActivatedRoute API](https://angular.dev/api/router/ActivatedRoute)

Happy Learning! 🚀
