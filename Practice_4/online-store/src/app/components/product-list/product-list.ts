import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [
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
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-goluboi-titan-106376665/'
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
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-256gb-chernyi-106088954/'
    },
    {
      id: 3,
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
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m2-2022-256-gb-seryi-kosmos-104548251/'
    },
    {
      id: 4,
      name: 'Sony PlayStation 5',
      description: 'Next-gen gaming console with 4K gaming and ultra-fast SSD',
      price: 329990,
      rating: 4.7,
      image: 'https://kaspi.kz/img/m/p/hf0/h5c/63953456291870.jpg',
      images: [
        'https://kaspi.kz/img/m/p/hf0/h5c/63953456291870.jpg',
        'https://kaspi.kz/img/m/p/h69/h5d/63953457537054.jpg',
        'https://kaspi.kz/img/m/p/he2/h5e/63953458782238.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-825-gb-belyi-100984966/'
    },
    {
      id: 5,
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
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-101362314/'
    },
    {
      id: 6,
      name: 'Dyson V15 Detect',
      description: 'Cordless vacuum with laser dust detection technology',
      price: 399990,
      rating: 4.6,
      image: 'https://kaspi.kz/img/m/p/h9e/h42/64195617972254.jpg',
      images: [
        'https://kaspi.kz/img/m/p/h9e/h42/64195617972254.jpg',
        'https://kaspi.kz/img/m/p/h17/h43/64195619217438.jpg',
        'https://kaspi.kz/img/m/p/h90/h44/64195620462622.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-zhelto-seryi-101218969/'
    },
    {
      id: 7,
      name: 'LG OLED55C3 55"',
      description: '4K OLED TV with stunning picture quality and gaming features',
      price: 749990,
      rating: 4.9,
      image: 'https://kaspi.kz/img/m/p/h6f/h11/84011893784606.jpg',
      images: [
        'https://kaspi.kz/img/m/p/h6f/h11/84011893784606.jpg',
        'https://kaspi.kz/img/m/p/he8/h12/84011895029790.jpg',
        'https://kaspi.kz/img/m/p/h61/h13/84011896274974.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/lg-oled55c3rla-55-2023-chernyi-105975821/'
    },
    {
      id: 8,
      name: 'Apple Watch Series 9 GPS 45mm',
      description: 'Advanced smartwatch with health monitoring and fitness tracking',
      price: 249990,
      rating: 4.8,
      image: 'https://kaspi.kz/img/m/p/h3a/h8f/84011894833182.jpg',
      images: [
        'https://kaspi.kz/img/m/p/h3a/h8f/84011894833182.jpg',
        'https://kaspi.kz/img/m/p/hb3/h90/84011896078366.jpg',
        'https://kaspi.kz/img/m/p/h2c/h91/84011897323550.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-45-mm-chernyi-106078001/'
    },
    {
      id: 9,
      name: 'GoPro HERO12 Black',
      description: 'Action camera with 5.3K video and advanced stabilization',
      price: 249990,
      rating: 4.7,
      image: 'https://kaspi.kz/img/m/p/hb7/hc8/84011895816222.jpg',
      images: [
        'https://kaspi.kz/img/m/p/hb7/hc8/84011895816222.jpg',
        'https://kaspi.kz/img/m/p/h30/hc9/84011897061406.jpg',
        'https://kaspi.kz/img/m/p/ha9/hca/84011898306590.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/gopro-hero12-black-chernyi-106134562/'
    },
    {
      id: 10,
      name: 'Xiaomi Robot Vacuum S10+',
      description: 'Smart robot vacuum with mopping and auto-empty station',
      price: 199990,
      rating: 4.6,
      image: 'https://kaspi.kz/img/m/p/h15/h3d/84011896340510.jpg',
      images: [
        'https://kaspi.kz/img/m/p/h15/h3d/84011896340510.jpg',
        'https://kaspi.kz/img/m/p/h8e/h3e/84011897585694.jpg',
        'https://kaspi.kz/img/m/p/h07/h3f/84011898830878.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-s10-belyi-106186433/'
    }
  ];
}