import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Product} from '../../services/product.service';
import {IProduct} from '../../services/product.interfaces';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [
    CurrencyPipe,
    RouterLink,
    CommonModule
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true
})
export class Products implements OnInit {
  products: IProduct[] = []

  constructor(private productService: Product, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (response) => {
        this.products = response.data
        this.cdr.detectChanges() // Force change detection
      },
      error: (err) => {
      }
    })
  }
}
