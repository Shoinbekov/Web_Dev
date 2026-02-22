import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './components/product-list/product-list';
import { ProductService } from './services/product.service';
import { Category } from './models/category';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.filteredProducts = this.productService.getProductsByCategory(categoryId);
  }
}