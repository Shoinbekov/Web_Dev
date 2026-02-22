import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  onLike() {
    this.product.likes++;
  }

  onDelete() {
    this.delete.emit(this.product.id);
  }

  shareOnWhatsApp() {
    const message = encodeURIComponent(`Check out this product: ${this.product.link}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  }

  shareOnTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  getStars(): number[] {
    return Array(5).fill(0).map((_, i) => i);
  }

  isStarFilled(index: number): boolean {
    return index < Math.floor(this.product.rating);
  }

  isStarHalf(index: number): boolean {
    return index === Math.floor(this.product.rating) && this.product.rating % 1 >= 0.5;
  }
}