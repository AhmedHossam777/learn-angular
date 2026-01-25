import {Component, OnInit} from '@angular/core';
import { Product} from '../../services/product.service';
import {IProduct} from '../../services/product.interfaces';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: IProduct[] = []

  constructor(private productService: Product) {
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (response) => {
        console.log(response.data)
        this.products = response.data
      },
      error :(err)=>{
        console.error('Error fetching products:', err)      }
    })
  }

}
