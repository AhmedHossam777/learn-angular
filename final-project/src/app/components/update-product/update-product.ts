import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';
import { Product } from '../../services/product.service';
import { IProduct, ProductData } from '../../services/product.interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-product.html',
  styleUrl: './update-product.css',
  standalone: true,
})
export class UpdateProduct implements OnInit {
  private currentProduct!: IProduct;
  updateProductForm!: FormGroup;

  constructor(
    private productService: Product,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.initEmptyForm();
    this.getOneProduct();
  }

  private initEmptyForm() {
    this.updateProductForm = this.fb.group({
      title: ['', [Validators.minLength(2), Validators.maxLength(200)]],
      price: [0, [Validators.min(0)]],
      description: ['', [Validators.minLength(10), Validators.maxLength(2000)]],
      category: ['', [Validators.minLength(2), Validators.maxLength(50)]],
      brand: ['', [Validators.minLength(2), Validators.maxLength(100)]],
      stock: [0, [Validators.min(0)]],
      images: this.fb.array([]),
      tags: this.fb.array([]),
    });
  }

  private populateForm(product: IProduct) {
    this.updateProductForm.patchValue({
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      brand: product.brand,
      stock: product.stock,
    });

    // Clear and repopulate images
    while (this.images.length) {
      this.images.removeAt(0);
    }
    (product.images || []).forEach((img) => {
      this.images.push(this.fb.control(img));
    });

    // Clear and repopulate tags
    while (this.tags.length) {
      this.tags.removeAt(0);
    }
    (product.tags || []).forEach((tag) => {
      this.tags.push(this.fb.control(tag));
    });
  }

  get title() {
    return this.updateProductForm.get('title');
  }

  get price() {
    return this.updateProductForm.get('price');
  }

  get description() {
    return this.updateProductForm.get('description');
  }

  get category() {
    return this.updateProductForm.get('category');
  }

  get brand() {
    return this.updateProductForm.get('brand');
  }

  get stock() {
    return this.updateProductForm.get('stock');
  }

  get images() {
    return this.updateProductForm.get('images') as FormArray;
  }

  get tags() {
    return this.updateProductForm.get('tags') as FormArray;
  }

  addImage() {
    const imageControl = this.fb.control('', [Validators.pattern('https?://.+')]);
    this.images.push(imageControl);
  }

  removeImage(index: number) {
    this.images.removeAt(index);
  }

  addTag() {
    const tagControl = this.fb.control('', [Validators.minLength(2), Validators.maxLength(30)]);
    this.tags.push(tagControl);
  }

  removeTag(index: number) {
    this.tags.removeAt(index);
  }

  private getOneProduct() {
    this.productService.getOne(this.getId()).subscribe({
      next: (res) => {
        this.currentProduct = res.data;
        this.populateForm(this.currentProduct);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  private getId() {
    return this.route.snapshot.paramMap.get('id');
  }

  submit() {
    if (this.updateProductForm.valid) {
      const productData: ProductData = this.prepareData();

      this.productService.update(productData, this.getId()).subscribe({
        next: (response) => {
          console.log('Product updated successfully:', response);
          this.router.navigate(['/products']);
        },
        error: (err) => {
          console.error('Error updating product:', err);
          alert(err);
        },
      });
    } else {
      this.updateProductForm.markAllAsTouched();
    }
  }

  private prepareData(): ProductData {
    const formValue = this.updateProductForm.value;
    return {
      category: formValue.category.trim(),
      brand: formValue.brand.trim(),
      description: formValue.description.trim(),
      title: formValue.title.trim(),
      stock: parseInt(formValue.stock),
      price: parseFloat(formValue.price),
      images: formValue.images.filter((img: string) => img && img.trim() !== ''),
      tags: formValue.tags.filter((tag: string) => tag && tag.trim() !== ''),
    };
  }
}
