import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  private products: Product[] = [
    // Smartphones (categoryId: 1)
    {
      id: 1,
      name: 'iPhone 15 Pro Max 256GB',
      description: 'Latest Apple flagship with A17 Pro chip and titanium design',
      price: 569990,
      rating: 4.9,
      image: 'https://kaspi.kz/img/m/p/h13/h76/84088962572318.jpg',
      images: [
        'https://kaspi.kz/img/m/p/h13/h76/84088962572318.jpg',
        'https://kaspi.kz/img/m/p/h1f/h7f/84088963817502.jpg',
        'https://kaspi.kz/img/m/p/h0e/h80/84088965062686.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-goluboi-titan-106376665/',
      categoryId: 1,
      likes: 0
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra 256GB',
      description: 'Premium Samsung flagship with S Pen and 200MP camera',
      price: 489990,
      rating: 4.8,
      image: 'https://kaspi.kz/img/m/p/h5b/h44/84088962048030.jpg',
      images: [
        'https://kaspi.kz/img/m/p/h5b/h44/84088962048030.jpg',
        'https://kaspi.kz/img/m/p/hd4/h45/84088963293214.jpg',
        'https://kaspi.kz/img/m/p/h4d/h46/84088964538398.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-256gb-chernyi-106088954/',
      categoryId: 1,
      likes: 0
    },
    {
      id: 3,
      name: 'Xiaomi 14 Pro 512GB',
      description: 'Flagship with Leica camera and powerful Snapdragon processor',
      price: 379990,
      rating: 4.7,
      image: 'https://kaspi.kz/img/m/p/h3a/h8f/84011894833182.jpg',
      images: [
        'https://kaspi.kz/img/m/p/h3a/h8f/84011894833182.jpg',
        'https://kaspi.kz/img/m/p/hb3/h90/84011896078366.jpg',
        'https://kaspi.kz/img/m/p/h2c/h91/84011897323550.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-14-pro-512gb-chernyi-106234001/',
      categoryId: 1,
      likes: 0
    },
    {
      id: 4,
      name: 'Google Pixel 8 Pro 256GB',
      description: 'Pure Android experience with excellent camera and AI features',
      price: 449990,
      rating: 4.8,
      image: 'https://kaspi.kz/img/m/p/h15/h3d/84011896340510.jpg',
      images: [
        'https://kaspi.kz/img/m/p/h15/h3d/84011896340510.jpg',
        'https://kaspi.kz/img/m/p/h8e/h3e/84011897585694.jpg',
        'https://kaspi.kz/img/m/p/h07/h3f/84011898830878.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/google-pixel-8-pro-256gb-chernyi-106345678/',
      categoryId: 1,
      likes: 0
    },
    {
      id: 5,
      name: 'OnePlus 12 256GB',
      description: 'Fast charging flagship with smooth display and great performance',
      price: 359990,
      rating: 4.6,
      image: 'https://kaspi.kz/img/m/p/h9e/h42/64195617972254.jpg',
      images: [
        'https://kaspi.kz/img/m/p/h9e/h42/64195617972254.jpg',
        'https://kaspi.kz/img/m/p/h17/h43/64195619217438.jpg',
        'https://kaspi.kz/img/m/p/h90/h44/64195620462622.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/oneplus-12-256gb-chernyi-106456789/',
      categoryId: 1,
      likes: 0
    },
    
    // Laptops (categoryId: 2)
    {
      id: 6,
      name: 'MacBook Air M2 13" 256GB',
      description: 'Lightweight laptop with Apple M2 chip and stunning display',
      price: 599990,
      rating: 4.9,
      image: 'https://kaspi.kz/img/m/p/h3f/h97/82507631091742.jpg',
      images: [
        'https://kaspi.kz/img/m/p/h3f/h97/82507631091742.jpg',
        'https://kaspi.kz/img/m/p/hb8/h98/82507632336926.jpg',
        'https://kaspi.kz/img/m/p/h31/h99/82507633582110.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m2-2022-256-gb-seryi-kosmos-104548251/',
      categoryId: 2,
      likes: 0
    },
    {
      id: 7,
      name: 'Dell XPS 15 512GB',
      description: 'Premium Windows laptop with InfinityEdge display',
      price: 749990,
      rating: 4.7,
      image: 'https://kaspi.kz/img/m/p/h6f/h11/84011893784606.jpg',
      images: [
        'https://kaspi.kz/img/m/p/h6f/h11/84011893784606.jpg',
        'https://kaspi.kz/img/m/p/he8/h12/84011895029790.jpg',
        'https://kaspi.kz/img/m/p/h61/h13/84011896274974.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/dell-xps-15-512gb-serebristyi-105567890/',
      categoryId: 2,
      likes: 0
    },
    {
      id: 8,
      name: 'Lenovo ThinkPad X1 Carbon',
      description: 'Business laptop with excellent keyboard and durability',
      price: 689990,
      rating: 4.8,
      image: 'https://kaspi.kz/img/m/p/hb7/hc8/84011895816222.jpg',
      images: [
        'https://kaspi.kz/img/m/p/hb7/hc8/84011895816222.jpg',
        'https://kaspi.kz/img/m/p/h30/hc9/84011897061406.jpg',
        'https://kaspi.kz/img/m/p/ha9/hca/84011898306590.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-chernyi-105678901/',
      categoryId: 2,
      likes: 0
    },
    {
      id: 9,
      name: 'ASUS ROG Zephyrus G14',
      description: 'Compact gaming laptop with AMD Ryzen and RTX graphics',
      price: 799990,
      rating: 4.7,
      image: 'https://kaspi.kz/img/m/p/h0a/hde/64424836096030.jpg',
      images: [
        'https://kaspi.kz/img/m/p/h0a/hde/64424836096030.jpg',
        'https://kaspi.kz/img/m/p/h83/hdf/64424837341214.jpg',
        'https://kaspi.kz/img/m/p/hfc/he0/64424838586398.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-chernyi-105789012/',
      categoryId: 2,
      likes: 0
    },
    {
      id: 10,
      name: 'HP Spectre x360 14',
      description: 'Convertible 2-in-1 laptop with OLED touchscreen',
      price: 719990,
      rating: 4.6,
      image: 'https://kaspi.kz/img/m/p/hf0/h5c/63953456291870.jpg',
      images: [
        'https://kaspi.kz/img/m/p/hf0/h5c/63953456291870.jpg',
        'https://kaspi.kz/img/m/p/h69/h5d/63953457537054.jpg',
        'https://kaspi.kz/img/m/p/he2/h5e/63953458782238.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/hp-spectre-x360-14-serebristyi-105890123/',
      categoryId: 2,
      likes: 0
    },

    // Headphones (categoryId: 3)
    {
      id: 11,
      name: 'AirPods Pro 2nd Gen',
      description: 'Premium wireless earbuds with active noise cancellation',
      price: 129990,
      rating: 4.8,
      image: 'https://kaspi.kz/img/m/p/h0a/hde/64424836096030.jpg',
      images: [
        'https://kaspi.kz/img/m/p/h0a/hde/64424836096030.jpg',
        'https://kaspi.kz/img/m/p/h83/hdf/64424837341214.jpg',
        'https://kaspi.kz/img/m/p/hfc/he0/64424838586398.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-101362314/',
      categoryId: 3,
      likes: 0
    },
    {
      id: 12,
      name: 'Sony WH-1000XM5',
      description: 'Industry-leading noise cancelling over-ear headphones',
      price: 179990,
      rating: 4.9,
      image: 'https://kaspi.kz/img/m/p/h9e/h42/64195617972254.jpg',
      images: [
        'https://kaspi.kz/img/m/p/h9e/h42/64195617972254.jpg',
        'https://kaspi.kz/img/m/p/h17/h43/64195619217438.jpg',
        'https://kaspi.kz/img/m/p/h90/h44/64195620462622.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105901234/',
      categoryId: 3,
      likes: 0
    },
    {
      id: 13,
      name: 'Bose QuietComfort Ultra',
      description: 'Premium comfort with spatial audio and excellent ANC',
      price: 189990,
      rating: 4.7,
      image: 'https://kaspi.kz/img/m/p/h6f/h11/84011893784606.jpg',
      images: [
        'https://kaspi.kz/img/m/p/h6f/h11/84011893784606.jpg',
        'https://kaspi.kz/img/m/p/he8/h12/84011895029790.jpg',
        'https://kaspi.kz/img/m/p/h61/h13/84011896274974.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/bose-quietcomfort-ultra-chernyi-106012345/',
      categoryId: 3,
      likes: 0
    },
    {
      id: 14,
      name: 'Samsung Galaxy Buds2 Pro',
      description: 'Compact wireless earbuds with 360 audio',
      price: 89990,
      rating: 4.6,
      image: 'https://kaspi.kz/img/m/p/h3a/h8f/84011894833182.jpg',
      images: [
        'https://kaspi.kz/img/m/p/h3a/h8f/84011894833182.jpg',
        'https://kaspi.kz/img/m/p/hb3/h90/84011896078366.jpg',
        'https://kaspi.kz/img/m/p/h2c/h91/84011897323550.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-fioletovyi-106123456/',
      categoryId: 3,
      likes: 0
    },
    {
      id: 15,
      name: 'Sennheiser Momentum 4',
      description: 'Audiophile-grade wireless headphones with exceptional sound',
      price: 199990,
      rating: 4.8,
      image: 'https://kaspi.kz/img/m/p/hb7/hc8/84011895816222.jpg',
      images: [
        'https://kaspi.kz/img/m/p/hb7/hc8/84011895816222.jpg',
        'https://kaspi.kz/img/m/p/h30/hc9/84011897061406.jpg',
        'https://kaspi.kz/img/m/p/ha9/hca/84011898306590.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/sennheiser-momentum-4-chernyi-106234567/',
      categoryId: 3,
      likes: 0
    },

    // Tablets (categoryId: 4)
    {
      id: 16,
      name: 'iPad Pro 12.9" M2 256GB',
      description: 'Professional tablet with M2 chip and Liquid Retina XDR display',
      price: 699990,
      rating: 4.9,
      image: 'https://kaspi.kz/img/m/p/h15/h3d/84011896340510.jpg',
      images: [
        'https://kaspi.kz/img/m/p/h15/h3d/84011896340510.jpg',
        'https://kaspi.kz/img/m/p/h8e/h3e/84011897585694.jpg',
        'https://kaspi.kz/img/m/p/h07/h3f/84011898830878.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-12-9-m2-256gb-seryi-kosmos-106345678/',
      categoryId: 4,
      likes: 0
    },
    {
      id: 17,
      name: 'Samsung Galaxy Tab S9 Ultra',
      description: 'Large AMOLED tablet with S Pen and powerful performance',
      price: 599990,
      rating: 4.8,
      image: 'https://kaspi.kz/img/m/p/h5b/h44/84088962048030.jpg',
      images: [
        'https://kaspi.kz/img/m/p/h5b/h44/84088962048030.jpg',
        'https://kaspi.kz/img/m/p/hd4/h45/84088963293214.jpg',
        'https://kaspi.kz/img/m/p/h4d/h46/84088964538398.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-ultra-chernyi-106456789/',
      categoryId: 4,
      likes: 0
    },
    {
      id: 18,
      name: 'Microsoft Surface Pro 9',
      description: 'Versatile 2-in-1 tablet with Windows and detachable keyboard',
      price: 549990,
      rating: 4.7,
      image: 'https://kaspi.kz/img/m/p/h3f/h97/82507631091742.jpg',
      images: [
        'https://kaspi.kz/img/m/p/h3f/h97/82507631091742.jpg',
        'https://kaspi.kz/img/m/p/hb8/h98/82507632336926.jpg',
        'https://kaspi.kz/img/m/p/h31/h99/82507633582110.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/microsoft-surface-pro-9-platina-106567890/',
      categoryId: 4,
      likes: 0
    },
    {
      id: 19,
      name: 'iPad Air 11" M2 128GB',
      description: 'Perfect balance of performance and portability',
      price: 399990,
      rating: 4.8,
      image: 'https://kaspi.kz/img/m/p/h13/h76/84088962572318.jpg',
      images: [
        'https://kaspi.kz/img/m/p/h13/h76/84088962572318.jpg',
        'https://kaspi.kz/img/m/p/h1f/h7f/84088963817502.jpg',
        'https://kaspi.kz/img/m/p/h0e/h80/84088965062686.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-m2-128gb-goluboi-106678901/',
      categoryId: 4,
      likes: 0
    },
    {
      id: 20,
      name: 'Lenovo Tab P12 Pro',
      description: 'OLED Android tablet with premium build and great speakers',
      price: 299990,
      rating: 4.6,
      image: 'https://kaspi.kz/img/m/p/h0a/hde/64424836096030.jpg',
      images: [
        'https://kaspi.kz/img/m/p/h0a/hde/64424836096030.jpg',
        'https://kaspi.kz/img/m/p/h83/hdf/64424837341214.jpg',
        'https://kaspi.kz/img/m/p/hfc/he0/64424838586398.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-tab-p12-pro-seryi-106789012/',
      categoryId: 4,
      likes: 0
    }
  ];

  constructor() { }

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  getAllProducts(): Product[] {
    return this.products;
  }
}