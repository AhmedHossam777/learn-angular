import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetailComponent implements OnInit {
  productId: string | null = null;
  product: any = null;
  
  // Mock database
  products = [
    { id: 1, name: 'Laptop', price: 999, description: 'High-performance laptop with 16GB RAM', inStock: true },
    { id: 2, name: 'Mouse', price: 29, description: 'Wireless ergonomic mouse', inStock: true },
    { id: 3, name: 'Keyboard', price: 79, description: 'Mechanical keyboard with RGB lighting', inStock: false },
    { id: 4, name: 'Monitor', price: 299, description: '27-inch 4K monitor', inStock: true }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Reading the route parameter 'id'
    this.productId = this.route.snapshot.paramMap.get('id');
    
    // Find the product based on the ID from the URL
    if (this.productId) {
      this.product = this.products.find(p => p.id === parseInt(this.productId!));
    }
  }
}
