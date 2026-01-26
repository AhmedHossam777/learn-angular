import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../services/product.service';
import {IProduct} from '../../services/product.interfaces';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  productId: string | null = null;
  product: IProduct | null = null;

  constructor(private route: ActivatedRoute, private productService: Product) {
  }


  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id')
    this.productService.getOne(this.productId).subscribe({
      next: (response) => {
        this.product = response.data
        console.log(this.product)
      },

      error: (err) => {
        console.error(err)
      }
    })

  }

}
