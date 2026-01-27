import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { IProduct, ProductData } from '../../services/product.interfaces';
import { Product } from '../../services/product.service';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css',
  standalone: true,
})
export class CreateProduct implements OnInit {
  productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: Product,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
      price: [0, [Validators.required, Validators.min(0.01)]],
      description: [
        '',
        [Validators.required, Validators.minLength(10), Validators.maxLength(2000)],
      ],
      category: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      brand: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      images: this.fb.array([]),
      tags: this.fb.array([]),
    });
  }

  get title() {
    return this.productForm.get('title');
  }

  get price() {
    return this.productForm.get('price');
  }

  get description() {
    return this.productForm.get('description');
  }

  get category() {
    return this.productForm.get('category');
  }

  get brand() {
    return this.productForm.get('brand');
  }

  get stock() {
    return this.productForm.get('stock');
  }

  get images() {
    return this.productForm.get('images') as FormArray;
  }

  get tags() {
    return this.productForm.get('tags') as FormArray;
  }

  addImage() {
    const imageControl = this.fb.control('', [
      Validators.required,
      Validators.pattern('https?://.+'),
    ]);
    this.images.push(imageControl);
  }

  removeImage(index: number) {
    this.images.removeAt(index);
  }

  addTag() {
    const tagControl = this.fb.control('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
    ]);
    this.tags.push(tagControl);
  }

  removeTag(index: number) {
    this.tags.removeAt(index);
  }

  submit() {
    if (this.productForm.valid) {
      console.log('form value', this.productForm.value);

      const productData: ProductData = this.prepareData();

      this.productService.create(productData).subscribe({
        next: (response) => {
          console.log('Product created successfully:', response);
          this.productForm.reset();
          this.router.navigate(['/products']);
        },
        error: (err) => {
          console.error('Error creating product:', err);
          alert(err);
        },
      });
    } else {
      this.productForm.markAllAsTouched();
    }
  }

  private prepareData(): ProductData {
    const formValue = this.productForm.value;
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
