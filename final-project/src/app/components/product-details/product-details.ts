import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {Product} from '../../services/product.service';
import {IProduct} from '../../services/product.interfaces';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  productId: string | null = null;
  product: IProduct | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private productService: Product, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id')
    this.productService.getOne(this.productId).subscribe({
      next: (response) => {
        this.product = response.data
        this.cdr.detectChanges() // Force change detection
      },

      error: (err) => {
        console.error(err)
      }
    })
  }

  delete() {
    this.productId = this.route.snapshot.paramMap.get('id')
    this.productService.deleteOne(this.productId).subscribe({
      next: (response) => {
        if (response.status === 204) {
          this.router.navigate(['/products']);
        }
      },
      error: (error) => {
        console.error('Delete failed:', error);
      }
    })
  }

}
